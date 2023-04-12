const router = require('express').Router();
const authService = require('../services/authService.js');
const photoService = require('../services/photoService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');

router.get('/', (req, res) => {
    res.render('home/home');
});

router.get('/', (req, res) => {
    res.render('home/404');
});

router.get('/profile', isAuth, async (req, res) => {
    const allPhotos = await photoService.getAll().populate('owner').lean();

    let photos = [];

    for (let photo in allPhotos) {
        if (allPhotos[photo].owner._id.toString() == req.user._id) {
            photos.push(allPhotos[photo]);
        }
    }

    const imagesCount = photos?.length;

    res.render('home/profile', { photos, imagesCount });
});

module.exports = router;