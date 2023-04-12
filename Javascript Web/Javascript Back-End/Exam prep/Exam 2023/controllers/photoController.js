const router = require('express').Router();
const photoService = require('../services/photoService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');
const { getErrorMessage } = require('../utils/errorUtils.js');




router.get('/create', (req, res) => {
    res.render('photo/create');
});

router.post('/create', isAuth, async (req, res) => {
    const photoData = req.body;

    try {
        await photoService.create(req.user._id, photoData);

        res.redirect('/photo/catalog');
    } catch (error) {
        res.status(400).render('photo/create', { error: getErrorMessage(error) })
    }
});


router.get('/catalog', async (req, res) => {
    const photo = await photoService.getAll().lean().populate('owner');
    //TODO PROFILE NAME

    res.render('photo/catalog', { photo });
});

router.get('/:photoId/details', async (req, res) => {
    const photo = await photoService.getOne(req.params.photoId).populate('owner').populate('commentList.userId');

    const isOwner = photo.owner == req.user?._id;
    const canComment = req.user?._id != photo.owner._id;
    const comments = photo.commentList;


    res.render('photo/details', { photo, isOwner, canComment, comments });
});


router.post('/:photoId/details', isAuth, async (req, res) => {

    const comment = req.body.comment;
    const photoId = req.params.photoId;
    const userId = req.user?._id;
    await photoService.commentPhoto(photoId, userId, comment);

    res.redirect(`/photo/${req.params.photoId}/details`)
});

router.get('/:photoId/edit', isAuth, async (req, res) => {
    const photo = await photoService.getOne(req.params.photoId).lean();

    const isOwner = req.user?._id == photo.owner


    res.render('photo/edit', { photo, isOwner, });

});

router.post('/:photoId/edit', isAuth, async (req, res) => {
    const photoData = req.body;

    try {
        await photoService.edit(req.params.photoId, photoData);

        res.redirect(`/photo/${req.params.photoId}/details`);
    } catch (error) {
        res.status(400).render('photo/edit', { error: getErrorMessage(error) });
    }
});

router.get('/:photoId/delete', isAuth, async (req, res) => {
    const photo = await photoService.getOne(req.params.photoId).lean();
    const isOwner = photo.owner == req.user?._id;
    if (isOwner) {
        try {
            await photoService.delete(req.params.photoId);

            res.redirect('/photo/catalog')
        } catch (error) {
            res.redirect('/');
        }
    }
});

module.exports = router;