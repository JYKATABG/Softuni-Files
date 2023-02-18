const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5

    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true,
    }
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;