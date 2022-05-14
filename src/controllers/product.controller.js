const Product = require('../models/Product')
const { validateObjectId } = require('../utils/validateObjectId')

exports.getAllProducts = async (req, res) => {
   try {
      const products = await Product.find()
      res.json(products)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.getProductById = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.query.productId)
      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const product = await Product.findById(req.query.productId)

      if (!product)
         return res.status(404).json({ message: 'El producto no existe' })

      res.json(product)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.createProduct = async (req, res) => {
   try {
      const newProduct = new Product(req.body)
      const productSaved = await newProduct.save()

      res.status(200).json(productSaved)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.updateProduct = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.query.productId)
      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const product = await Product.findByIdAndUpdate(
         req.query.productId,
         {
            $set: {
               ...req.body,
            },
         },
         { new: true }
      )

      if (!product)
         return res.status(404).json({ message: 'El producto no existe' })

      res.json(product)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}

exports.deleteProduct = async (req, res) => {
   try {
      console.log(req.query)
      const isValidId = validateObjectId(req.query.productId)
      if (!isValidId)
         return res.status(400).json({ message: 'La ID es inválida' })

      const product = await Product.findByIdAndDelete(req.query.productId)

      if (!product)
         return res.status(404).json({ message: 'El producto no existe' })

      res.json(product)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Ocurrio un error con el servidor' })
   }
}
