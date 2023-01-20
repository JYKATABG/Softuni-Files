const router = require('express').Router();

const cubeController = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');

//All homeControllers
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

//All cubeControllers
router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.detailsCreateCube);


module.exports = router;