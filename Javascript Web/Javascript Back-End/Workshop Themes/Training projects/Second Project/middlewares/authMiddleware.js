const jwt = require('../lib/util.js');
const { SECRET } = require('../constants.js');


exports.authentication = async (req, res, next) => {
    const token = req.cookies['user'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.isAuthenticated = true;
            res.locals.user = decodedToken;
        } catch (err) {
            res.clearCookie('user');

            return res.status(401).redirect('404');
        }
    }

    next();
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login');
    }

    next();
};