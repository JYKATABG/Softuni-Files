class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let allVegetables = []
        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(" ");
            quantity = Number(quantity);
            price = Number(price);
            let product = this.availableProducts.find(p => p.type == type)

            if (product == undefined) {
                this.availableProducts.push({ type, quantity, price });
                allVegetables.push(type);
            } else {
                product.quantity += quantity
                if (price > product.price) {
                    product.price = price
                }
            }
        }
        return `Successfully added ${allVegetables.join(", ")}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let vegetable of selectedProducts) {
            let [type, quantity] = vegetable.split(" ");
            quantity = Number(quantity);
            let product = this.availableProducts.find((p) => p.type === type)

            if (product == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > product.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let price = product.price * quantity;
            product.quantity -= quantity;
            totalPrice += price
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        let product = this.availableProducts.find(p => p.type === type)
        if (product == undefined) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity > product.quantity) {
            product.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        } else {
            product.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let resArr = [`Available vegetables:`]
        this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(p => {
            resArr.push(`${p.type}-${p.quantity}-$${p.price}`)
        });
        resArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return resArr.join("\n");
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());






