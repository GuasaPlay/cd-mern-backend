const Product = require('../models/Product')

exports.createProduct = async (req, res) => {
   try {
      const newProduct = new Product(req.body)
      const productSaved = await newProduct.save()

      res.status(200).json(productSaved)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}
