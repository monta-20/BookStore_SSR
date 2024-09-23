const BookModel = require('../models/book');

exports.BookController = (req, res, next) => {
  BookModel.getallbooks().then(books => {
    res.render('index', { books: books }); 
  });
};
