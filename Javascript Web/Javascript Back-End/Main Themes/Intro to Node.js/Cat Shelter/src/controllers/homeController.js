const Cat = require('../models/Cat.js');

exports.getHomePage = async(req, res) => {
    let cats = await Cat.find().lean();

    res.render('index', { cats });
}