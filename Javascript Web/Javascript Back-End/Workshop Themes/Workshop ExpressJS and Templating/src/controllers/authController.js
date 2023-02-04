const router = require('express').Router();

const authManager = require('../manager/authManager.js');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authManager.login(username, password);
        res.cookie('auth', token, { httpOnly: true })
    } catch (err) {
        console.log(err);

        return res.redirect('/');
    }

    res.redirect('/')
})

router.get('/register', async (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.status(404).end();
    }

    const existingUser = await authManager.getUserByUsername(username);

    if (existingUser) {
        return res.status(404).end();
    }

    const user = authManager.register(username, password);

    res.redirect('/login');
});


module.exports = router;