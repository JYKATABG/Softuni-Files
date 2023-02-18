const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const { SECRET } = require('../constants.js');
const jwt = require('../lib/jwt.js');

exports.getUser = (email) => User.findOne({ email });

exports.register = async (email, password, repeatPassword, skills) => {

    if (password !== repeatPassword) {
        throw new Error('Password missmatch');
    };

    const existingUser = await this.getUser(email);

    if (existingUser) {
        throw new Error('User already exists');
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword, skills });

    return this.login(email, password);
}

exports.login = async (email, password) => {

    const user = await this.getUser(email);

    if (!user) {
        throw new Error('Invalid email or password');
    };

    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    };

    if (password.length < 5) {
        throw new Error('Password too short');
    }

    const payload = { _id: user._id, email }
    const token = await jwt.sign(payload, SECRET);

    return token;
}