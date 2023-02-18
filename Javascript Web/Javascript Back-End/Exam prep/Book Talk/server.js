const express = require('express');
const app = express();

const viewEngine = require('./config/viewEngine.js');
const router = require('./routes.js');
const databaseInit = require('./config/databaseInit.js');
const cookieParser = require('cookie-parser');
const { authentication } = require('./middlewares/authMiddleware.js');

viewEngine(app)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(router);

databaseInit()
    .then(() => app.listen(3000, () => console.log('Server is running')))
    .catch((err) => console.error(err));