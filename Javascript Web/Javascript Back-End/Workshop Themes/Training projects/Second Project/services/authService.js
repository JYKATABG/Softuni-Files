const jwt = require('../lib/util.js');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const { SECRET } = require('../constants.js');

exports.getUserByUsername = (username) => User.findOne({ username });
exports.getUserByEmail = (email) => User.findOne({ email });

exports.register = (email, username, password) => {
    User.create({ email, username, password });

    return this.login(email, password);
}

exports.login = async (email, password) => {
    const user = await this.getUserByEmail(email);

    const isValid = await bcrypt.compare(password, user.password);

    if (!user || !isValid) {
        throw 'Invalid username or password';
    }

    const payload = { _id: user._id, email: email, username: user.username };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
};