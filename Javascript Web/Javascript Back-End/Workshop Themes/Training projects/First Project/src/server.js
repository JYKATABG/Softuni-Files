const express = require('express');
const app = express();

const routes = require('./routes.js');
const databaseInit = require('./config/databaseInit.js');

//setup viewEngine
const setupViewEngine = require('./config/viewEngine.js');
setupViewEngine(app);
app.use(express.urlencoded({ extended: false }));
app.use(routes);
//middleware
//css setup
app.use(express.static('src/public'));

databaseInit()
    .then(() => app.listen(5000, () => console.log('Server is started on port 5000...✔️')))
    .catch((err) => console.error(err));
