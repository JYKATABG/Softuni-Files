const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const viewEngine = require('./config/viewEngine.js');
const routes = require('./routes.js');
const databaseInit = require('./config/databaseInit.js');
const { authentication } = require('./middlewares/authMiddleware.js');

viewEngine(app);
app.use(express.static('views/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

databaseInit()
    .then(() => app.listen(5000, () => console.log('Server is working')))
    .catch((err) => console.error(err));
