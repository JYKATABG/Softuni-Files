function storeProvision(currentstock, forDelivery) {

    let storeProducts = {}

    for (let i = 0; i < currentstock.length; i += 2) {
        let product = currentstock[i]
        storeProducts[product] = Number(currentstock[i + 1])
    }

    for (let a = 0; a < forDelivery.length; a += 2) {
        let product = forDelivery[a]
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }

        storeProducts[product] += Number(forDelivery[a + 1])
    }

    for (let key of Object.keys(storeProducts)) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }
}
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)