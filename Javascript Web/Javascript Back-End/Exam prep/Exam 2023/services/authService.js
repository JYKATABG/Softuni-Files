const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const { SECRET } = require('../constants.js');
const jwt = require('../lib/jwt.js');

exports.getUser = (username) => User.findOne({ username });
exports.getEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {

    if (password !== repeatPassword) {
        throw new Error('Password missmatch');
    };

    if (password == '' || repeatPassword == '') {
        throw new Error('Password is required');
    }

    const existingUser = await this.getUser(username);

    if (existingUser) {
        throw new Error('User already exist');
    }

    if (password.length < 4) {
        throw new Error('Password too short');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPassword })

    return this.login(username, password);
};

exports.login = async (username, password) => {

    const user = await this.getUser(username);

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    const payload = { _id: user._id, username, email: user.email };
    const token = await jwt.sign(payload, SECRET);

    return token;
}