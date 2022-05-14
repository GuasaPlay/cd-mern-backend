const { Router } = require('express')
const {
   createProduct,
   getAllProducts,
   getProductById,
   deleteProduct,
   updateProduct,
} = require('../controllers/product.controller')

const router = Router()

router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-id', getProductById)
router.post('/create-product', createProduct)
router.put('/update-product', updateProduct)
router.delete('/delete-product', deleteProduct)

module.exports = router
