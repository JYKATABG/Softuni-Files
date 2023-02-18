const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const { getErrorMessage } = require('../utils/errorUtils.js');

const authService = require('../services/authService.js');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie('user', token);
        res.redirect('/');
    } catch (error) {
        return res.status(400).render('auth/login', { error: getErrorMessage(error) });
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;
    try {
        const token = await authService.register(username, email, password, repeatPassword);

        res.cookie('user', token);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})


module.exports = router;