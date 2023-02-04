const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/profile">Profile</a></li>
    </ul>
    `)
})

app.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="login" />
    </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username == 'Ivan' && password == 'peti') {
        const authData = {
            username: 'Ivan'
        }
        res.cookie('auth', JSON.stringify(authData));
        return res.redirect('/');
    }

    res.status(401).end();
});

app.get('/profile', (req, res) => {
    const authData = req.cookies['auth'];

    if (!authData) {
        return res.status(401).end();
    }

    const { username } = JSON.parse(authData);

    console.log(username);

    res.send(`
        <h1>Your username - ${username}
    `);
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
