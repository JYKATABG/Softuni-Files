const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js');
const { SECRET } = require('../constants.js');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch');
    }

    //Check user exitst

    const existingUser = await this.findByUsername(username);
    if (existingUser) {
        throw new Error('User exists');
    }

    if (password.length < 4) {
        throw new Error('Password too short');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPassword });

    return this.login(email, password);

}

exports.login = async (email, password) => {
    //User exitstis
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }
    //Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    //Generate token

    const payload = { _id: user._id, email, username: user.username };

    const token = await jwt.sign(payload, SECRET);

    return token;
}