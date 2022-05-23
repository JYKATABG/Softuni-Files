function addBags(input) {

    let baggagePrice = Number(input[0])
    let baggageKg = Number(input[1])
    let tripTime = Number(input[2])
    let baggageNumber = Number(input[3])

    let baggageSum = 0;

    if (baggageKg < 10) {
        baggageSum = baggagePrice * 0.20
    } else if (baggageKg <= 20) {
        baggageSum = baggagePrice * 0.50;
    } else if(baggageKg > 20) {
        baggageSum = baggagePrice;
    }

    if (tripTime > 30) {
        baggageSum = baggageSum * 1.10
    } else if (tripTime >= 7 && tripTime <= 30) {
        baggageSum = baggageSum * 1.15
    } else if(tripTime < 7) {
        baggageSum = baggageSum * 1.40
    }

    let totalSum = baggageSum * baggageNumber;

    console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`);

}
addBags(["63.80",
"23",
"3",
"1"])





