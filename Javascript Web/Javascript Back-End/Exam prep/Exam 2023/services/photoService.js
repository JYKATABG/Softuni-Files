const { find } = require('../models/Photo.js');
const Photo = require('../models/Photo.js');
const User = require('../models/User.js');

exports.getAll = () => Photo.find({});

exports.getOne = (photoId) => Photo.findById(photoId).lean();

exports.create = (ownerId, photoData) => Photo.create({ ...photoData, owner: ownerId });

exports.getUserData = (userId) => {
    const user = User.findById(userId).populate('username').lean();

    return user;
}

exports.comment = async (userId, comment, photoId) => {
    const photo = await Photo.findById(photoId);
    photo.commentList.push(userId, comment);

    return photo.save();
}

exports.commentPhoto = (photoId, userId, comment) => Photo.findByIdAndUpdate(photoId, { $push: { commentList: { userId, comment } } });


exports.edit = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);