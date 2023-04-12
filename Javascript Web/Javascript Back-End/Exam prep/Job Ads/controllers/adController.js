const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const adService = require('../services/adService.js');
const { getErrorMessage } = require('../util/errorUtils.js');

router.get('/create', isAuth, (req, res) => {
    res.render('ads/create');
});

router.post('/create', isAuth, async (req, res) => {
    const adData = req.body;

    try {
        await adService.create(req.user._id, adData);

        res.redirect('/ad/catalog');
    } catch (error) {
        res.status(400).render('ads/create', { error: getErrorMessage(error) });
    }
});


router.get('/catalog', async (req, res) => {
    const ad = await adService.getAll().lean();

    res.render('ads/catalog', { ad });
});

router.get('/:adId/apply', isAuth, async (req, res) => {
    await adService.apply(req.user._id, req.params.adId);

    res.redirect(`/ad/${req.params.adId}/details`);
});

router.get('/:adId/details', async (req, res) => {
    const ad = await adService.getOne(req.params.adId).lean();
    const user = await adService.getUser(ad.owner).lean();
    const isOwner = ad.owner == req.user?._id;
    const isApply = ad.appliers?.some(id => id == req.user?._id);
    const applierData = await adService.getAllCandidates(req.params.adId);
    const applier = applierData.appliers;
    console.log(applier.appliers);

    res.render('ads/details', { ad, user, isOwner, isApply, applier });
});

router.get('/:adId/edit', isAuth, async (req, res) => {
    const ad = await adService.getOne(req.params.adId).lean();

    res.render('ads/edit', { ad });
});

router.post('/:adId/edit', isAuth, async (req, res) => {
    const adData = req.body;
    const ad = await adService.getOne(req.params.adId);
    const isOwner = ad.owner == req.user?._id;
    if (isOwner) {
        try {
            await adService.edit(req.params.adId, adData);
            res.redirect(`/ad/${req.params.adId}/details`);

        } catch (error) {
            return res.status(400);
        }
    }
});

router.get('/:adId/delete', isAuth, async (req, res) => {
    const ad = await adService.getOne(req.params.adId);
    const isOwner = ad.owner == req.user?._id;

    if (isOwner) {
        try {
            await adService.delete(req.params.adId);

            res.redirect('/ad/catalog');
        } catch (error) {
            return res.status(400);
        }
    }
});




module.exports = router;