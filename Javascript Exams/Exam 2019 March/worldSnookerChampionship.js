function worldSnookerChampionship(input) {
    let championship = input[0]
    let ticketType = input[1]
    let ticketNumber = Number(input[2])
    let trophyPicture = input[3]

    let sum = 0;
    let buyedTrophy = false;

    if (ticketType === "Standard") {
        switch (championship) {
            case "Quarter final":
                sum += 55.50;
                break;
            case "Semi final":
                sum += 75.88;
                break;
            case "Final":
                sum += 110.10
                break;
        }
    } else if (ticketType === "Premium") {
        switch (championship) {
            case "Quarter final":
                sum += 105.20;
                break;
            case "Semi final":
                sum += 125.22;
                break;
            case "Final":
                sum += 160.66
                break;
        }
    } else if (ticketType === "VIP") {
        switch (championship) {
            case "Quarter final":
                sum += 118.90;
                break;
            case "Semi final":
                sum += 300.40;
                break;
            case "Final":
                sum += 400;
                break;
        }
    }

    let ticketPrice = ticketNumber * sum

    if (ticketPrice > 4000) {
        ticketPrice *= 0.75;
        buyedTrophy = true;
    } else if (ticketPrice > 2500) {
        ticketPrice *= 0.90
    }

    if (buyedTrophy === true) {
        ticketPrice = ticketPrice
    } else {
        if (trophyPicture === "Y") {
            ticketPrice += ticketNumber * 40;
        } else {
            ticketPrice = ticketPrice
        }
    }

    console.log(ticketPrice.toFixed(2));
}
worldSnookerChampionship(["Quarter final",
    "Premium",
    "25",
    "N"])



