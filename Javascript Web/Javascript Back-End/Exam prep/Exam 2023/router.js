const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');
const photoController = require('./controllers/photoController.js');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/photo', photoController);

module.exports = router;