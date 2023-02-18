const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [2, 'Title should be at least 2 characters'],
        required: true
    },
    author: {
        type: String,
        minLength: [5, 'Author should be at least 5 characters'],
        required: true
    },
    image: {
        type: String,
        validate: [/^https?:\/\//, 'Image should start with http'],
        required: true
    },
    review: {
        type: String,
        minLength: [10, 'Review should be a minimum of 10 characters long'],
        required: true
    },
    genre: {
        type: String,
        minLength: [3, 'Genre should be at least 3 characters'],
        required: true
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    wishers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;