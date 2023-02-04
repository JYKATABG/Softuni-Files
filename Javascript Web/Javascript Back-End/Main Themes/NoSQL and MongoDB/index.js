const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

const Cat = mongoose.model('Cat', catSchema);

async function main() {

    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter');

    console.log('Database connected!');

    await callCat();
    // await createCat('Zeus', 4, 'Bengal');

}

async function createCat(name, age, breed) {

    await Cat.create({
        name,
        age,
        breed,
    })

    // const cat = new Cat({
    //     name,
    //     age,
    //     breed
    // });

    // await cat.save();
}

async function callCat() {

    const cats = await Cat.find();

    console.log(cats);
}

main()