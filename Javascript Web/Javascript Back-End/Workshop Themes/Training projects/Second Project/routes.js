const router = require('express').Router();

const bookController = require('./controllers/bookController.js');
const homeController = require('./controllers/homeController.js');
const authController = require('./controllers/authController.js');

//Homepage
router.use('/', homeController);
//Books
router.use('/books', bookController);
//Authentication
router.use('/auth', authController);

module.exports = router;