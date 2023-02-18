const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const bookService = require('../services/bookService.js');

router.get('/', (req, res) => {
    res.render('home/home');
});

router.get('/404', (req, res) => {
    res.render('home/404');
});

router.get('/profile', isAuth, (req, res) => {
    const user = await
    // const book = await bookService.getAll().lean();

    res.render('home/profile');
})

module.exports = router;