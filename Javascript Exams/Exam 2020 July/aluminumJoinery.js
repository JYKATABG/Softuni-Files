function aluminumJoinery(input) {

    let joineryNumber = Number(input[0])
    let joineryType = input[1]
    let deliveryType = input[2]

    let sum = 0;

    if (joineryNumber < 10) {
        console.log("Invalid order");
    } else if (joineryNumber >= 10) {
        switch (joineryType) {
            case "90X130":
                sum = joineryNumber * 110;

                if (joineryNumber > 30 && joineryNumber <= 60) {
                    sum *= 0.95
                } else if (joineryNumber > 60) {
                    sum *= 0.92
                }

                break;

            case "100X150":
                sum = joineryNumber * 140;

                if (joineryNumber > 40 && joineryNumber <= 80) {
                    sum *= 0.94
                } else if (joineryNumber > 80) {
                    sum *= 0.9;
                }

                break;


            case "130X180":
                sum = joineryNumber * 190;

                if (joineryNumber > 20 && joineryNumber <= 50) {
                    sum *= 0.93
                } else if (joineryNumber > 50) {
                    sum *= 0.88
                }

                break;

            case "200X300":
                sum = joineryNumber * 250;

                if (joineryNumber > 25 && joineryNumber <= 50) {
                    sum *= 0.91
                } else if (joineryNumber > 50) {
                    sum *= 0.86
                }

                break;
        }

        if (deliveryType === "With delivery") {
            sum += 60
        }

        if (joineryNumber > 99) {
            sum *= 0.96
        }

        console.log(`${sum.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["105",
"100X150",
"With delivery"])







