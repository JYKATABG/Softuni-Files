const express = require('express');
const cookieParser = require('cookie-parser');

const config = require('./config/config.js');
const routes = require('./routes.js');
const setupViewEngine = require('./config/viewEngine.js');
const initDatabase = require('./config/db.js');

const app = express();
setupViewEngine(app);
// require('./config/viewEngine.js')(app);

app.use(cookieParser());
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err));

