function cats(catsData) {

    class Cat {
        constructor(name,age) {
            this.name = name
            this.age = age

        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catArray = []

    for(let catData of catsData) {
        let splitetData = catData.split(" ")
        let catName = splitetData[0]
        let catAge = splitetData[1]
        let cat = new Cat(catName,catAge)

        catArray.push(cat)
    }

    for(let cat of catArray) {
        cat.meow()
    }

}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])