const Cube = require('../models/Cube.js');
const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/:cubeId/details', async (req, res) => {
    let cube = await Cube.findById(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube })
})

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    const cube = new Cube({ name, description, imageUrl, difficultyLevel });
    try {
        cube = await cube.save();
        res.redirect(`/cubes/${cube._cubeId}/details`)
    } catch (err) {
        res.render('cubes/create', { cube: cube });
    }

    res.redirect('/');
});


module.exports = router;