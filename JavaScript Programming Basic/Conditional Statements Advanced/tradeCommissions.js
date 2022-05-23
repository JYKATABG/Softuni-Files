function tradeCommissions(input) {
    let city = input[0]
    let salesAmount = Number(input[1])

    let commision = 0;

    if (salesAmount <= 0 && salesAmount <= 500) {

        switch (city) {
            case "Sofia": console.log((salesAmount * 0.5).toFixed(2)); break;
            case "Varna": console.log((salesAmount * 0.45).toFixed(2)); break;
            case "Plovdiv": console.log((salesAmount * 0.55).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount <= 500 && salesAmount <= 1000) {

        switch (city) {
            case "Sofia": console.log((salesAmount * 0.7).toFixed(2)); break;
            case "Varna": console.log((salesAmount * 0.75).toFixed(2)); break;
            case "Plovdiv": console.log((salesAmount * 0.8).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount < 1000 && salesAmount <= 10000) {

        switch (city) {
            case "Sofia": console.log((salesAmount * 0.8).toFixed(2)); break;
            case "Varna": console.log((salesAmount * 0.10).toFixed(2)); break;
            case "Plovdiv": console.log((salesAmount * 0.12).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount > 10000) {

        switch (city) {
            case "Sofia": console.log((salesAmount * 0.12).toFixed(2)); break;
            case "Varna": console.log((salesAmount * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((salesAmount * 0.145).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
}
tradeCommissions(["Varna",
"9999.9999"])






