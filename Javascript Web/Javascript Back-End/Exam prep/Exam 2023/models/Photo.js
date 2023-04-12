const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, 'Name is required and should be at least 2 characters.'],
        required: true
    },
    image: {
        type: String,
        validate: [/^https?:\/\//, 'Image should start with http:// or https://'],
        required: true
    },
    age: {
        type: Number,
        min: [1, 'age is required and should be at least 1 and no longer than 100 characters.'],
        max: [100, 'age is required and should be at least 1 and no longer than 100 characters.'],
        required: true
    },
    description: {
        type: String,
        minLength: [5, 'description  should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'description  should be at least 5 and no longer than 50 characters.'],
        required: true
    },
    location: {
        type: String,
        minLength: [5, 'location should be at least 5 and no longer than 50 characters.'],
        maxLength: [50, 'location should be at least 5 and no longer than 50 characters.'],
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    commentList: [{
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String
        }
    }]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;