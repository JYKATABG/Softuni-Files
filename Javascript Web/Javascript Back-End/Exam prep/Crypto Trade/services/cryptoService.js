const Crypto = require('../models/Crypto.js');

exports.getOne = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.getAll = () => Crypto.find({});

exports.buy = async (userId, cryptoId) => {
    const crypto = await Crypto.findById(cryptoId);
    crypto.buyers.push(userId);
    return crypto.save();
}

exports.search = async (name, paymentMethod) => {
    let crypto = await this.getAll().lean();

    if (name) {
        crypto = crypto.filter(x => x.name.toLowerCase() == name.toLowerCase());
    };

    if (paymentMethod) {
        crypto = crypto.filter(x => x.paymentMethod == paymentMethod);
    }

    return crypto;
}

exports.edit = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.create = (ownerId, cryptoData) => Crypto.create({ ...cryptoData, owner: ownerId });

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);