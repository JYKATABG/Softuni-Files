const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: [10, 'Email must be 10 characters'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        minLength: [5, 'Username must be 5 characters'],
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;