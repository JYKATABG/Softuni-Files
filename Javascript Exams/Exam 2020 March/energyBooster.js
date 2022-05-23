function energyBooster(input) {
    let fruit = input[0]
    let set = input[1]
    let setNumber = Number(input[2])

    let sum = 0;
    let totalsum = 0;

    if (set === "small") {

        switch (fruit) {
            case "Watermelon": sum = 56 * 2; break;
            case "Mango": sum = 36.66 * 2; break;
            case "Pineapple": sum = 42.10 * 2; break;
            case "Raspberry": sum = 20 * 2; break;
        }

    } else if (set === "big") {
        switch (fruit) {
            case "Watermelon": sum = 28.70 * 5; break;
            case "Mango": sum = 19.60 * 5; break;
            case "Pineapple": sum = 24.80 * 5; break;
            case "Raspberry": sum = 15.20 * 5; break;
        }
    }

    let setPrice = setNumber * sum

    if (setPrice >= 400 && setPrice <= 1000) {
        let discount15 = setPrice * 0.15;
        totalsum = setPrice - discount15;
    } else if (setPrice > 1000) {
        let discount50 = setPrice * 0.50
        totalsum = setPrice - discount50;
    } else {
        totalsum = setPrice;
    }
    console.log(`${totalsum.toFixed(2)} lv.`);
}
energyBooster(["Mango",
"big",
"8"])



