const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    headline: {
        type: String,
        minLength: [4, 'Headline should be a minimum of 4 characters long'],
        required: true
    },
    location: {
        type: String,
        minLength: [8, 'Location should be a minimum of 8 characters long'],
        required: true
    },
    company: {
        type: String,
        minLength: [3, 'Company name should be at least 3 characters'],
        required: true
    },
    description: {
        type: String,
        maxLength: [40, 'description should be a maximum of 40 characters long'],
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    appliers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;