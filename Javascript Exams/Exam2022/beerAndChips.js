function beerAndChips(input) {

    let name = input[0]
    let budget = Number(input[1])
    let beerBottle = Number(input[2])
    let chipsPacket = Number(input[3])

    let totalBeerPrice = 1.20 * beerBottle;
    let chipsPrice = (totalBeerPrice * 0.45)
    let totalChipsPrice = Math.ceil(chipsPrice * chipsPacket);
    let totalSum = totalBeerPrice + totalChipsPrice

    if(budget >= totalSum) {
        console.log(`${name} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(totalSum - budget).toFixed(2)} more leva!`);
    }

}
beerAndChips(["Valentin",
"5",
"2",
"4"])

