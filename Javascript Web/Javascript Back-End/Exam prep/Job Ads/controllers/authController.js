const router = require('express').Router();
const authService = require('../services/authService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');
const { getErrorMessage } = require('../util/errorUtils.js');

//REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { email, password, repeatPassword, skills } = req.body;

    try {
        const token = await authService.register(email, password, repeatPassword, skills);

        res.cookie('user', token);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }
});

//LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const token = await authService.login(email, password);

        res.cookie('user', token);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('auth/login', { error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})

module.exports = router;