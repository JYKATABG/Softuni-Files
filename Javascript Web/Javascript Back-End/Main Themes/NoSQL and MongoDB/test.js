const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

const Cats = mongoose.model('Cat', catSchema);

async function main() {

    mongoose.set('strictQuery', false);

    mongoose.connect('mongodb://127.0.0.1:27017/catShelter');

    console.log('Database Connected!');

    await callCat();
    
    // const Tobayas = new Cats({name: 'Tobayas', age: 7, breed: 'oranjeva'})
    // await Tobayas.save();

}

async function callCat() {
    const cats = await Cats.find();

    console.log(cats);
}

main();