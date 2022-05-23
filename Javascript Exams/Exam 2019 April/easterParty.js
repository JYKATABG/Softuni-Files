function easterParty(input) {

    let guestNumber = Number(input[0])
    let peoplePrice = Number(input[1])
    let budget = Number(input[2])

    let sum = 0;

    if(guestNumber >= 10 && guestNumber <= 15) {
        peoplePrice = peoplePrice * 0.85;
    } else if(guestNumber > 15 && guestNumber <= 20) {
        peoplePrice = peoplePrice * 0.80;
    } else if(guestNumber > 20) {
        peoplePrice = peoplePrice * 0.75
    }

    let cakePrice = budget * 0.10
    let totalSum = guestNumber * peoplePrice + cakePrice;

    if(budget > totalSum) {
        console.log(`It is party time! ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalSum - budget).toFixed(2)} leva needed.`);
    }
    

}
easterParty(["24",
"35",
"550"])


