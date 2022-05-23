function newHouse(input) {
    let flower = input[0]
    let flowerNum = Number(input[1])
    let budget = Number(input[2])

    let price = 0;

    switch (flower) {
        case "Roses": 
            price = flowerNum * 5;
            if (flowerNum > 80) {
                price = price * 0.9;
            }
            break;
        case "Dahlias": 
            price = flowerNum * 3.80;
            if (flowerNum > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips": 
            price = flowerNum * 2.80;
            if (flowerNum > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus": 
            price = flowerNum * 3;
            if (flowerNum < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus": 
            price = flowerNum * 2.50;
            if (flowerNum < 80) {
                price = price * 1.2;
            }
            break;
    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerNum} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Gladiolus",
"64",
"160"])


