const express = require('express');
const app = express();

const viewEngine = require('./config/viewEngine.js');
const router = require('./router.js');
const databaseInit = require('./config/databaseInit.js');
const cookieParser = require('cookie-parser');
const { authentication } = require('./middlewares/authMiddleware.js');

viewEngine(app);
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication)
app.use(router);

databaseInit()
    .then(() => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch((err) => console.error(err));
