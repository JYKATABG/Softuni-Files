const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js');
const { SECRET } = require('../constants.js');

exports.findUsernameById = (username) => User.findOne({ username });
exports.findEmailById = (email) => User.findOne({ email });

exports.register = async (email, username, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch');
    };

    const existingUser = await this.findUsernameById(username);

    if (existingUser) {
        throw new Error('User already exists');
    };

    if (password.length < 3) {
        throw new Error('Password too short');
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, username, password: hashedPassword });

    return this.login(email, password);
};

exports.login = async (email, password) => {

    const user = await this.findEmailById(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    const payload = { _id: user._id, email, username: user.username };

    const token = await jwt.sign(payload, SECRET);

    return token;
}