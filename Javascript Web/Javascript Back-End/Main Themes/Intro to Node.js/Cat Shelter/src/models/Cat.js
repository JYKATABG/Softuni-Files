const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upload: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
})

const Cat = model('Cat', catSchema);

module.exports = Cat;