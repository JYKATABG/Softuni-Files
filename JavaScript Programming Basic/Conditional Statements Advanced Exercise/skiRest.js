function skiRest(input) {
    let days = Number(input[0])
    let roomType = input[1]
    let feedback = input[2]

    let night = days - 1;
    let sumForAllNights = 0;

    switch (roomType) {
        case "room for one person":
            sumForAllNights = night * 18;
            break;
        case "apartment":
            sumForAllNights = night * 25;
            if (days < 10) {
                sumForAllNights = sumForAllNights * 0.7;
            } else if(days <= 15) {
                sumForAllNights = sumForAllNights * 0.65;
            } else if (days > 15) {
                sumForAllNights = sumForAllNights * 0.50;
            }
            break;
        case "president apartment":
            sumForAllNights = night * 35;
            if (days < 10) {
                sumForAllNights = sumForAllNights * 0.9;
            } else if(days <= 15) {
                sumForAllNights = sumForAllNights * 0.85;
            } else if (days > 15) {
                sumForAllNights = sumForAllNights * 0.80;
            }
            break;
    }

    if(feedback === "positive") {
        sumForAllNights = sumForAllNights * 1.25;
    }else if (feedback === "negative") {
        sumForAllNights = sumForAllNights * 0.9;
    }

    console.log(sumForAllNights.toFixed(2));
}

skiRest(["30",
"president apartment",
"negative"])

