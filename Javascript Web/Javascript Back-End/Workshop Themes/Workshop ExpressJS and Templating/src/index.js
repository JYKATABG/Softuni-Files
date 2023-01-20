const express = require('express');

const config = require('./config/config.js');
const routes = require('./routes.js');
const setupViewEngine = require('./config/viewEngine.js');

const app = express();
setupViewEngine(app);
// require('./config/viewEngine.js')(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));