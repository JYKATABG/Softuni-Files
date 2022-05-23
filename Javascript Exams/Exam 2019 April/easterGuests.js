function easterGuests(input) {

    let guestNumber = Number(input[0])
    let budget = Number(input[1])

    let easterBread = Math.ceil(guestNumber / 3);
    let requiredEggs = guestNumber * 2;

    let easterBreadPrice = easterBread * 4;
    let eggsPrice = requiredEggs * 0.45;
    let totalPrice = easterBreadPrice + eggsPrice;
    
    if(budget >= totalPrice) {
        console.log(`Lyubo bought ${easterBread} Easter bread and ${requiredEggs} eggs.`);
        console.log(`He has ${(budget - totalPrice).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalPrice - budget).toFixed(2)} lv. more.`);
    }

}
easterGuests(["9",
"12"])

