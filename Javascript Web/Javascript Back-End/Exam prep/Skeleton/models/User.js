const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid Email'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        maxLength: 40,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;