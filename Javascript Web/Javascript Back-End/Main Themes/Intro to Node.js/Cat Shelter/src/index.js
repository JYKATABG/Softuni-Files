const express = require('express');
const app = express();
const router = require('./router.js');


const config = require('./config/index.js');
const setupViewEngine = require('./config/viewEngine.js');
const initDatabase = require('./config/databaseInit.js');

setupViewEngine(app);
app.use(express.urlencoded({extended: false}));
app.use(express.static('src/public'));
app.use(router);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`)))
    .catch((err) => console.error(err));
    
