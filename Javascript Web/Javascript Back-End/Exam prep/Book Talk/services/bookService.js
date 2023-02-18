const Book = require('../models/Book.js');

exports.getAll = () => Book.find({});

exports.getOne = (bookId) => Book.findById(bookId);

exports.create = (ownerId, bookData) => Book.create({ ...bookData, owner: ownerId });

exports.read = async (userId, bookId) => {
    const book = await Book.findById(bookId);
    book.wishers.push(userId);
    return book.save();
};

exports.edit = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData);

exports.delete = (bookId) => Book.findByIdAndDelete(bookId);