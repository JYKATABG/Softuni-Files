function pCGameShop(input) {

    let index = 0;
    let saledGames = input[index]
    index++;

    let countHearthstone = 0;
    let countFortnite = 0;
    let countOverwatch = 0;
    let countOther = 0;

    for (let i = 0; i < saledGames; i++) {
        let game = input[index]
        index++;

        switch (game) {
            case "Hearthstone": countHearthstone++; break;
            case "Fornite": countFortnite++; break;
            case "Overwatch": countOverwatch++; break;
            default: countOther++; break;
        }
    }
    let hearthstoneP = countHearthstone / saledGames  * 100;
    let forniteP = countFortnite / saledGames * 100;
    let overwatchP = countOverwatch / saledGames * 100;
    let otherP = countOther / saledGames * 100;

    console.log(`Hearthstone - ${hearthstoneP.toFixed(2)}%`);
    console.log(`Fornite - ${forniteP.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchP.toFixed(2)}%`);
    console.log(`Others - ${otherP.toFixed(2)}%`);
        

}
pCGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

