function godizlaVsKong(input) {
    let filmBudget = Number(input[0])
    let statistNum = Number(input[1])
    let statistOutfit = Number(input[2])

    let decorPrice = filmBudget * 0.10
    let outfitPrice = statistNum * statistOutfit

    if (statistNum > 150) {
        outfitPrice = outfitPrice * 0.90
    } 

    let totalFilmBudget = decorPrice + outfitPrice
    
    if (filmBudget >= totalFilmBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(  filmBudget - totalFilmBudget).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalFilmBudget - filmBudget).toFixed(2)} leva more.`);
    }


}

godizlaVsKong(["9587.88",
"222",
"55.68"])

