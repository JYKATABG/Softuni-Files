function filmPremiere(input) {
    let firstRow = input[0]
    let secondRow = input[1]
    let thirdRow = Number(input[2])

    let ticket = 0;

    if (firstRow === "John Wick" && secondRow === "Drink") {
        ticket = (12 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`)
    } else if (firstRow === "John Wick" && secondRow === "Popcorn") {
        ticket = (15 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "John Wick" && secondRow === "Menu") {
        ticket = (19 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    }

    if (firstRow === "Star Wars" && secondRow === "Drink" && thirdRow >= 4) {
        ticket = ((18 * thirdRow) * 0.70).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Star Wars" && secondRow === "Popcorn" && thirdRow >= 4) {
        ticket = ((25 * thirdRow) * 0.70).toFixed(2);
        console.log(`Your bill is ${(ticket)} leva.`);
    } else if (firstRow === "Star Wars" && secondRow === "Menu" && thirdRow >= 4) {
        ticket = ((30 * thirdRow) * 0.70).toFixed(2)
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Star Wars" && secondRow === "Drink" && thirdRow <= 4){
        ticket = (18 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Star Wars" && secondRow === "Popcorn" && thirdRow <= 4) {
        ticket = (25 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Star Wars" && secondRow === "Menu" && thirdRow <= 4) {
        ticket = (30 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    }

    if (firstRow === "Jumanji" && secondRow === "Drink" && thirdRow === 2) {
        ticket = ((9 * thirdRow) * 0.85).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Jumanji" && secondRow === "Popcorn" && thirdRow === 2) {
        ticket = ((11 * thirdRow) * 0.85).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Jumanji" && secondRow === "Menu" && thirdRow === 2) {
        ticket = ((14 * thirdRow) * 0.85).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Jumanji" && secondRow === "Drink" && thirdRow != 2) {
        ticket = (9 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Jumanji" && secondRow === "Popcorn" && thirdRow != 2) {
        ticket = (11 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    } else if (firstRow === "Jumanji" && secondRow === "Menu" && thirdRow != 2) {
        ticket = (14 * thirdRow).toFixed(2);
        console.log(`Your bill is ${ticket} leva.`);
    }
}

filmPremiere(["Star Wars", "Popcorn", "10"])

