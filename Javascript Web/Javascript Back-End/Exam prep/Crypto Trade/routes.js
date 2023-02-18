const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');
const cryptoController = require('./controllers/cryptoController.js');

router.use('/', homeController);

router.use('/auth', authController);

router.use('/crypto', cryptoController);

router.all('*', (req, res) => {
    res.render('home/404');
})

module.exports = router;