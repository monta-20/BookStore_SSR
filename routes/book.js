const bookcontroller = require('../controllers/book')

const router = require('express').Router()

router.get('/',bookcontroller.BookController)

module.exports=router