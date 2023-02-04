const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const catController = require('./controllers/catController.js');

router.get('/', homeController.getHomePage);

router.get('/cats/add-cat', catController.getCreateCat);
router.post('/cats/add-cat', catController.postCreateCat);

module.exports = router;