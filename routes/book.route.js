const BookController = require('../controllers/book.controller')

const router = require('express').Router()

router.get('/books',BookController.BookAllController)

module.exports=router
