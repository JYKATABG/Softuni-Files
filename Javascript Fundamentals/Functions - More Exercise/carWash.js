function carWash(array) {

    let value = 0;

    let soap = x => x + 10;
    let water = x => x + x * 0.2
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;

    for(let i = 0;i < array.length;i++) {
        if(array[i] === "soap") {
            value = soap(value)
        } else if (array[i] === "water") {
            value = water(value)
        } else if (array[i] === "vacuum cleaner") {
            value = vacuum(value)
        } else {
            value = mud(value)
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])