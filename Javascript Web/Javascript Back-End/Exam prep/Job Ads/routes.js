const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');
const adController = require('./controllers/adController.js');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/ad', adController);
router.all('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;