const { Router } = require('express')
const {
   getAllAuthors,
   getAuthorById,
   createAuthor,
   updateAuthor,
   deleteAuthor,
} = require('../controllers/author.controller')

const router = Router()

router.get('/get-all-authors', getAllAuthors)
router.get('/get-author-by-id', getAuthorById)
router.post('/create-author', createAuthor)
router.put('/update-author', updateAuthor)
router.delete('/delete-author', deleteAuthor)

module.exports = router
