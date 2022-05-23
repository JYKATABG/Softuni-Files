function boatForFishing(input) {
    let budget = Number(input[0])
    let season = input[1]
    let fisherManNum = Number(input[2])

    let seasonSum = 0;

    switch (season) {
        case "Spring": seasonSum = 3000; break;
        case "Summer": 
        case "Autumn": seasonSum = 4200; break;
        case "Winter": seasonSum = 2600; break;
        
    }

    if (fisherManNum <= 6) {

        seasonSum = seasonSum * 0.90

    } else if (fisherManNum >= 7 && fisherManNum <= 11) {

        seasonSum = seasonSum * 0.85

    } else if (fisherManNum >= 12) {

        seasonSum = seasonSum * 0.75

    }
      
    if (fisherManNum % 2 === 0 && season !==  "Autumn") {
        seasonSum = seasonSum * 0.95
    }

    if (budget >= seasonSum) {
        console.log(`Yes! You have ${(budget - seasonSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(seasonSum - budget).toFixed(2)} leva.`);
    }
}

boatForFishing(["2000",
"Winter",
"13"])


