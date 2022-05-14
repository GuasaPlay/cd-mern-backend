const Author = require('../models/Author')
const { validateObjectId } = require('../utils/validateObjectId')

exports.getAllAuthors = async (req, res) => {
   try {
      const authors = await Author.find().sort({ name: 1 })
      res.status(200).json(authors)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.getAuthorById = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.query.authorId)
      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const author = await Author.findById(req.query.authorId)
      res.status(200).json(author)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.createAuthor = async (req, res) => {
   try {
      const newAuthor = new Author(req.body)
      const authorSaved = await newAuthor.save()

      res.status(200).json(authorSaved)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.updateAuthor = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.query.authorId)

      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const author = await Author.findByIdAndUpdate(
         req.query.authorId,
         {
            $set: {
               ...req.body,
            },
         },
         { new: true }
      )

      if (!author)
         return res.status(404).json({ message: 'El autor no existe' })

      res.json(author)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.deleteAuthor = async (req, res) => {
   try {
      console.log(req.query)
      const isValidId = validateObjectId(req.query.authorId)
      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const author = await Author.findByIdAndDelete(req.query.authorId)

      res.json(author)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}
