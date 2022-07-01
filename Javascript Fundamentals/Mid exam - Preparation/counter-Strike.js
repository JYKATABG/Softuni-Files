function counterStrike(input) {

    let wonBattles = 0;
    let index = 0;
    let initialEnergy = Number(input[index])
    
    for(let i = index + 1;i < input.length;i++) {

        let currentDistance = input[i]
        if(currentDistance === "End of battle") {
            break;
        } else {
            currentDistance = Number(input[i])
        }

        if(initialEnergy >= currentDistance) {
            wonBattles++;
            initialEnergy -= currentDistance;
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            return;
        }
        if(wonBattles % 3 === 0) {
            initialEnergy += wonBattles;
        }
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])



