const Cat = require('../models/Cat.js');

exports.getCreateCat = (req, res) => {
    res.render('addCat');
}

exports.postCreateCat = async(req, res) => {
    const { name, description, upload, breed } = req.body

    let cat = new Cat({ name, description, upload, breed });

    await cat.save();

    res.redirect('/');
}