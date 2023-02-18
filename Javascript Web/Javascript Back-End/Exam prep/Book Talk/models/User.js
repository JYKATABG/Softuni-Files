const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [4, 'Username is too short'],
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        minLength: [10, 'Email should be at least 10 characters long'],
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;