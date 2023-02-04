const Cube = require('../models/Cube.js');


exports.getHomePage = async (req, res) => {

    let cubes = await Cube.find().lean();

    res.render('index', { cubes });
}

exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.getErrorPage = (req, res) => {
    res.render('404');
}