const router = require('express').Router();

const cubeController = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/authController.js');

//All homeControllers
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

//All cubeControllers
router.get('/cubes/create', cubeController.getCreateCube);
router.post('/cubes/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.detailsCreateCube);

//Attach
router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory);
//Accessories
router.use('/accessories', accessoryController);

//Authentication
router.use('/', authController);

module.exports = router;