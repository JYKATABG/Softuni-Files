const { Schema, model, default: mongoose } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        //http && https validators
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;