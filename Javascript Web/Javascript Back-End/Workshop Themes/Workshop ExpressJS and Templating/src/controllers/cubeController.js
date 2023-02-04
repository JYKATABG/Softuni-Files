const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body
    //save cube
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save();

    //redirect
    res.redirect('/');
}

exports.detailsCreateCube = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {
        res.redirect('/404');
    }

    res.render('cube/details', { cube });
}

exports.getAttachAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
    res.render('cube/attach', { cube, accessories });
}

exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
}