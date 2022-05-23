function easterDecoration(input) {

    let index = 0;
    let customers = Number(input[index])
    index++;
    let command = input[index]
    index++;

    let itemsNumber = 0;
    let bill = 0;
    let totalSum = 0;

    for (let i = 0; i < customers; i++) {
        bill = 0;
        itemsNumber = 0;

        while (command !== "Finish") {

            if(command === "basket") {
                bill += 1.50;
                itemsNumber++;
            } else if(command === "wreath") {
                bill += 3.80;
                itemsNumber++;
            } else if (command === "chocolate bunny") {
                bill += 7;
                itemsNumber++;
            }

            command = input[index]
            index++;
        }

        if(itemsNumber % 2 === 0) {
            bill *= 0.80
        }

        if(command === "Finish") {
            console.log(`You purchased ${itemsNumber} items for ${bill.toFixed(2)} leva.`);
            totalSum += bill;
        }

        command = input[index]
        index++;
    }

    let avgSum = totalSum / customers;

    console.log(`Average bill per client is: ${avgSum.toFixed(2)} leva.`);

}
easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

