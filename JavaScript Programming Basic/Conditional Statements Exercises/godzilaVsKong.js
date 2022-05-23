function godzilaVsKong(input) {
    let budget = Number(input[0])
    let statistCount = Number(input[1])
    let statistOutfitPrice = Number(input[2])

    let decorSum = budget * 0.1;
    let outfitPrice = statistCount * statistOutfitPrice;

    if(statistCount > 150) {
        outfitPrice = outfitPrice * 0.9;
    }

    let totalFilmSum = decorSum + outfitPrice;

    if (budget >= totalFilmSum ) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalFilmSum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalFilmSum - budget).toFixed(2)} leva more.`);
    }
    
}

godzilaVsKong(["9587.88","222","55.68"])

