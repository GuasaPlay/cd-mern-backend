const { Router } = require('express')
const {
   createProduct,
   getAllProducts,
} = require('../controllers/product.controller')

const router = Router()

router.get('/get-all-products', getAllProducts)
router.post('/create-product', createProduct)

module.exports = router
