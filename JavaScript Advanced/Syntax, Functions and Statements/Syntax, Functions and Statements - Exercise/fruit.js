function fruit(fruit, weight, price) {

    let sum = (weight * price) / 1000;
    let kilograms = weight / 1000;

    console.log(`I need $${sum.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)