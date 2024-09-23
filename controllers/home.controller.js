const homeModel = require('../models/home.models.js');

exports.BookThreeController = (req, res, next) => {
  homeModel.getThreebooks().then(books => {
    res.render('index', { Threebooks: books }); 
  });
};
