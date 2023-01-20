const Cube = require('../models/Cube.js');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body
    //save cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel);

    Cube.save(cube);

    //redirect
    res.redirect('/');
}

exports.detailsCreateCube = (req, res) => {
    const cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        res.redirect('/404')
    }

    //Searching for cubeId
    let cube = db.cubes.find(x => x.id == cubeId);

    if (!cube) {
        res.redirect('/404');
    }

    res.render('details', { cube });
}