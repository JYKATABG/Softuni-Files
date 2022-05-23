function easterTrip(input) {

    let destination = input[0]
    let date = (input[1])
    let nightsNumber = Number(input[2])

    let sum = 0;

    if (destination === "France") {
        switch (date) {
            case "21-23":
                sum += 30;
                break;
            case "24-27":
                sum += 35;
                break;
            case "28-31":
                sum += 40;
                break;
        }
    } else if (destination === "Italy") {
        switch (date) {
            case "21-23":
                sum += 28;
                break;
            case "24-27":
                sum += 32;
                break;
            case "28-31":
                sum += 39;
                break;
        }
    } else if (destination === "Germany") {
        switch (date) {
            case "21-23":
                sum += 32;
                break;
            case "24-27":
                sum += 37;
                break;
            case "28-31":
                sum += 43;
                break;
        }
    }

    let nightsPrice = nightsNumber * sum;
    console.log(`Easter trip to ${destination} : ${nightsPrice.toFixed(2)} leva.`);


}
easterTrip(["France",
"28-31",
"8"])


