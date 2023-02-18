const Ad = require('../models/Ad.js');
const User = require('../models/User.js');

exports.getAll = () => Ad.find({});

exports.getAllCandidates = (adId) => {
    const ad = Ad.findById(adId).populate('appliers', ['email', 'skills']).lean();

    return ad;
}


exports.getUser = (ownerId) => User.findById(ownerId);

exports.getOne = (adId) => Ad.findById(adId);

exports.create = (ownerId, adData) => Ad.create({ ...adData, owner: ownerId });

exports.apply = async (userId, adId) => {
    const ad = await Ad.findById(adId);
    ad.appliers.push(userId);
    return ad.save();
};

exports.edit = (adId, adData) => Ad.findByIdAndUpdate(adId, adData);

exports.delete = (adId) => Ad.findByIdAndDelete(adId);