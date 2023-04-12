const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const { SECRET } = require('../constants.js');
const jwt = require('../lib/jwt.js');

exports.getUser = (username) => User.findOne({ username });
exports.getEmail = (email) => User.findOne({ email });

exports.register = async (email, username, password, repeatPassword) => {

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

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, username, password: hashedPassword })

    return this.login(email, password);
};

exports.login = async (email, password) => {

    const user = await this.getEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    const payload = { _id: user._id, email, username: user.username };
    const token = await jwt.sign(payload, SECRET);

    return token;
}