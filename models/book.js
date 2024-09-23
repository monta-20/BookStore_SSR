const mongoose = require('mongoose');

const schemaBook = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    author: String,
    price: Number,
    image: String,
    reviews: { type: Number, default: 0 }, // Add reviews count
    rating: { type: Number, default: 0 } // Add average rating
  });
  

const Book = mongoose.model('book', schemaBook);
const url = 'mongodb://127.0.0.1:27017/library';;

exports.getallbooks = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
      return Book.find({});
    }).then(books => {
      mongoose.disconnect();
      resolve(books);
    }).catch(err => reject(err));
  });
};
