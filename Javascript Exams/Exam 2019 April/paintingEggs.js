function paintingEggs(input) {

    let eggSize = input[0]
    let eggColor = input[1]
    let eggBatch = Number(input[2])

    let sum = 0;

    if (eggSize === "Large") {
        switch (eggColor) {
            case "Red":
                sum += 16;
                break;
            case "Green":
                sum += 12;
                break;
            case "Yellow":
                sum += 9;
                break;
        }
    } else if (eggSize === "Medium") {
        switch (eggColor) {
            case "Red":
                sum += 13;
                break;
            case "Green":
                sum += 9;
                break;
            case "Yellow":
                sum += 7;
                break;
        }
    } else if (eggSize === "Small") {
        switch (eggColor) {
            case "Red":
                sum += 9;
                break;
            case "Green":
                sum += 8;
                break;
            case "Yellow":
                sum += 5;
                break;
        }
    }

    let price = eggBatch * sum;
    let expenses = price * 0.35;

    let sumAfterExpenses = price - expenses;

    console.log(`${sumAfterExpenses.toFixed(2)} leva.`);

}
paintingEggs(["Small",
"Yellow",
"3"])


