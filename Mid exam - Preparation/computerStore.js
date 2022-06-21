function computerStore(data) {

    let index = 0;
    let command = data[index]
    index++;
    let sum = 0;

    while (command !== "regular" && command !== "special") {

        let currentNumber = Number(command)

        if (currentNumber < 0) {
            console.log("Invalid price!");
            command = data[index]
            index++;
            continue;
        }

        sum += currentNumber;


        command = data[index]
        index++;
    }

    let taxs = sum * 0.2;
    let totalPrice = sum + taxs;
    if (command === "special") {
        totalPrice = totalPrice *= 0.90
    }

    if (totalPrice <= 0) {
        console.log("Invalid order!");

    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxs.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    


