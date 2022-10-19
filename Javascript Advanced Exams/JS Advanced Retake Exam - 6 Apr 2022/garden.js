class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.")
        }

        this.spaceAvailable -= spaceRequired

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if(quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        let plant = this.plants.find(p => p.plantName === plantName);
        if(plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        
        if(plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        plant.ripe = true;
        plant.quantity += quantity

        if(quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let plantIndex = this.plants.findIndex(p => p.plantName === plantName)
        if(plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let plant = this.plants[plantIndex]
        if(plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants.splice(plantIndex,1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });

        this.spaceAvailable += plant.spaceRequired

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let plantAsString = this.plants.map(p => p.plantName);
        let plantRow = `Plants in the garden: ${plantAsString.join(", ")}`

        let storageRow = "Plants in storage: The storage is empty.";
        if(this.storage.length >= 0) {
            let storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            storageRow = `Plants in storage: ${storageAsString.join(", ")}`
        }
        debugger

        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantRow,
            storageRow
        ].join("\n");
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








