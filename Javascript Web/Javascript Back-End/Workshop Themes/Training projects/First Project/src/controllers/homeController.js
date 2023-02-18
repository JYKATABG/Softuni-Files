const Cube = require('../models/Cube.js');
const router = require('express').Router();


router.get('/', async (req, res) => {
    const cubes = await Cube.find().lean();

    res.render('home', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;