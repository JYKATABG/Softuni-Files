const express = require('express');
const app = express();
const databaseInit = require('./config/databaseInit.js');
const cookieParser = require('cookie-parser');

const router = require('./routes.js');
const viewEngine = require('./config/viewEngine.js');
const { authentication } = require('./middlewares/authMiddleware.js');

viewEngine(app);
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(router);

databaseInit()
    .then(() => app.listen(5000, () => console.log('Server is running')))
    .catch((err) => console.error(err));
