const router = require('express').Router();
const authService = require('../services/authService.js');
const { getErrorMessage } = require('../utils/errorUtils.js');

router.get('/register', (req, res) => {
    res.render('auth/register');
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

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const token = await authService.login(username, password);

        res.cookie('user', token)
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/login', { error: getErrorMessage(error) });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})


module.exports = router;