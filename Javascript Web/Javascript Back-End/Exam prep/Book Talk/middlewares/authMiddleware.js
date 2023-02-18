const jwt = require('../lib/jwt.js');
const { SECRET } = require('../constants.js');

exports.authentication = async (req, res, next) => {

    const token = req.cookies['user'];

    if (token) {

        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.isAuthenticated = true;
            res.locals.user = decodedToken;
        } catch (error) {
            res.clearCookie('user');
            res.status(401).render('home/404');
        }
    }
    next();
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        res.redirect('/404');
    }

    next();
};