const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const cryptoService = require('../services/cryptoService.js');
const { getErrorMessage } = require('../utils/errorUtils.js');
const { getPaymentMethodViewData } = require('../utils/viewDataUtils.js');

//Info pages
router.get('/catalog', async (req, res) => {

    const crypto = await cryptoService.getAll().lean();

    res.render('crypto/catalog', { crypto });
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    await cryptoService.buy(req.user._id, req.params.cryptoId);

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
})

router.get('/:cryptoId/details', async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId);

    const isOwner = crypto.owner == req.user?._id;

    const isBuyer = crypto.buyers?.some(id => id == req.user?._id);

    res.render('crypto/details', { crypto, isOwner, isBuyer });
});

//Auth pages
router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = req.body;

    try {
        await cryptoService.create(req.user._id, cryptoData);

    } catch (error) {
        return res.status(400).render('crypto/create', { error: getErrorMessage(error) });
    }

    res.redirect('/crypto/catalog');
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId);
    const paymentMethods = getPaymentMethodViewData(crypto.paymentMethod);

    res.render('crypto/edit', { crypto, paymentMethods });
});

router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    const cryptoData = req.body;

    await cryptoService.edit(req.params.cryptoId, cryptoData);

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

//Delete functionality
router.get('/:cryptoId/delete', isAuth, async (req, res) => {

    await cryptoService.delete(req.params.cryptoId);

    res.redirect('/crypto/catalog');
});

router.get('/search', async (req, res) => {
    const { name, paymentMethod } = req.query;

    const crypto = await cryptoService.search(name, paymentMethod);

    const paymentMethods = getPaymentMethodViewData(paymentMethod);

    res.render('crypto/search', { crypto, paymentMethods, name });
})


module.exports = router;    