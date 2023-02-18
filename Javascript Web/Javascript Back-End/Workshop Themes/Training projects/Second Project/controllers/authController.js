const authService = require('../services/authService.js');
const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js')
const { getErrorMessage } = require('../utils/errorUtils.js');


//Login form view
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie('user', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) });
    };

});


//Register form view
router.get('/register', (req, res) => {
    res.render('auth/register');
});

//Register authentication
router.post('/register', async (req, res) => {
    const { email, username, password, confirmPassword } = req.body;

    //Create User
    try {
        const token = await authService.register(email, username, password);

        res.cookie('user', token);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }
});

//Logout
router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})

module.exports = router;