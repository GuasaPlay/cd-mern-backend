const { Router } = require('express')
const {
   createProduct,
   getAllProducts,
   getProductById,
} = require('../controllers/product.controller')

const router = Router()

router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-id', getProductById)
router.post('/create-product', createProduct)

module.exports = router
