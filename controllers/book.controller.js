const bookModel = require('../models/home.models.js');

exports.BookAllController = (req, res, next) => {
    bookModel.getallbooks().then(books => {
      res.render('books', { Allbooks: books }); 
    });
  };
