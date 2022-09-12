function vacation(people, type, day) {

    let totalsum = 0;

    if (type === "Students") {

        switch (day) {
            case "Friday":
                totalsum = people * 8.45;
                break;
            case "Saturday":
                totalsum = people * 9.80;
                break;
            case "Sunday":
                totalsum = people * 10.46;
                break;
        }
        if (people >= 30) {
            totalsum *= 0.85;
        }

    } else if (type === "Business") {

        if (people >= 100) {
            switch (day) {
                case "Friday":
                    totalsum = (people - 10) * 10.90;
                    break;
                case "Saturday":
                    totalsum = (people - 10) * 15.60;
                    break;
                case "Sunday":
                    totalsum = (people - 10) * 16;
                    break;
            }
        } else {
            switch (day) {
                case "Friday":
                    totalsum = people * 10.90;
                    break;
                case "Saturday":
                    totalsum = people * 15.60;
                    break;
                case "Sunday":
                    totalsum = people * 16;
                    break;
            }
        }
    } else if (type === "Regular") {

        switch (day) {
            case "Friday":
                totalsum = people * 15;
                break;
            case "Saturday":
                totalsum = people * 20;
                break;
            case "Saturday":
                totalsum = people * 22.50;
                break;
        }

        if (people >= 10 && people <= 20) {
            totalsum *= 0.95;
        }
    }
    console.log(`Total price: ${totalsum.toFixed(2)}`);

}
vacation(120,
    "Regular",
    "Saturday"

)