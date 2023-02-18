const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const bookService = require('../services/bookService.js');
const { getErrorMessage } = require('../utils/errorUtils.js');

router.get('/create', isAuth, (req, res) => {
    res.render('book/create');
});

router.post('/create', isAuth, async (req, res) => {
    const bookData = req.body;

    try {
        await bookService.create(req.user._id, bookData);

        res.redirect('/book/catalog');
    } catch (error) {
        res.status(400).render('book/create', { error: getErrorMessage(error) });
    }
});

router.get('/catalog', async (req, res) => {
    const book = await bookService.getAll().lean();

    res.render('book/catalog', { book });
});

router.get('/:bookId/details', async (req, res) => {
    const book = await bookService.getOne(req.params.bookId).lean();
    const isWisher = book.wishers?.some(id => id == req.user?._id);
    const isOwner = book.owner == req.user?._id;

    res.render('book/details', { book, isOwner, isWisher });
});

router.get('/:bookId/read', isAuth, async (req, res) => {

    await bookService.read(req.user._id, req.params.bookId);

    res.redirect(`/book/${req.params.bookId}/details`);
});

router.get('/:bookId/edit', isAuth, async (req, res) => {
    const book = await bookService.getOne(req.params.bookId).lean();

    res.render('book/edit', { book });
});

router.post('/:bookId/edit', isAuth, async (req, res) => {
    const bookData = req.body;

    await bookService.edit(req.params.bookId, bookData);

    res.redirect(`/book/${req.params.bookId}/details`);
});


router.get('/:bookId/delete', isAuth, async (req, res) => {

    await bookService.delete(req.params.bookId);

    res.redirect('/book/catalog');
});

module.exports = router;