const Book = require('../models/Book.js');
const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { title, author, genre, stars, image, review } = req.body;

    const books = new Book({ title, author, genre, stars, image, review });

    await books.save();

    res.redirect('/books/catalog');
})

router.get('/catalog', async (req, res) => {
    const books = await Book.find().lean();

    res.render('catalog', { books });
});
module.exports = router;

router.get('/:bookId/details', async (req, res) => {
    const book = await Book.findById(req.params.bookId).lean();

    if (!book) {
        return res.redirect('/404');
    }

    res.render('details', { book });
});
