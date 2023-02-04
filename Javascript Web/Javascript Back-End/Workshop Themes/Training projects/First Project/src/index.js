const express = require('express');
const app = express();
const router = require('./router.js');
const databaseInit = require('./config/databaseInit.js');

const config = require('./config/index.js');
const setupViewEngine = require('./config/viewEngine.js');

setupViewEngine(app);

app.use(express.urlencoded({extended: false}));
app.use(express.static('src/public'));
app.use(router);

databaseInit()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`)))
    .catch((err) => console.error(err));

