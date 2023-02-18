const router = require('express').Router();
const adService = require('../services/adService.js');

router.get('/', async (req, res) => {
    const ad = await adService.getAll().lean();
    const slicedAd = ad.slice(0, 3);
    console.log(slicedAd);

    res.render('home/home', { slicedAd });
});

router.get('/404', (req, res) => {
    res.render('home/404');
});

module.exports = router;