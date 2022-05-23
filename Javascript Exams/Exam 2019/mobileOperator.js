function mobileOperator(input) {
    let termContract = input[0]
    let contractType = input[1]
    let mobileInternet = input[2]
    let monthPrice = Number(input[3])

    let sum = 0;

    if (termContract === "one") {
        switch (contractType) {
            case "Small": sum += 9.98; break;
            case "Middle":  sum += 18.99; break;
            case "Large": sum += 25.98; break;
            case "ExtraLarge":  sum += 35.99; break;
        }
    } else if(termContract === "two") {
        switch (contractType) {
            case "Small": sum += 8.58; break;
            case "Middle":  sum += 17.09; break;
            case "Large": sum += 23.59; break;
            case "ExtraLarge":  sum += 31.79; break;
        }
    }

    if(mobileInternet === "yes") {
        if(sum <= 10) {
            sum += 5.50;
        } else if(sum <= 30) {
            sum += 4.35;
        } else {
            sum += 3.85;
        }
    }

    if(termContract === "two") {
        sum = (sum * 96.25) / 100
    }

    let totalPrice = sum * monthPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
mobileOperator(["two",
"Small",
"yes",
"20"])



