function fitnessCard(input) {
    let availableSum = Number(input[0])
    let gender = input[1]
    let age = Number(input[2])
    let sport = input[3]

    let sportSum = 0;

    if (gender === "m") {

        switch (sport) {
            case "Gym": sportSum = 42; break;
            case "Boxing": sportSum = 41; break;
            case "Yoga": sportSum = 45; break;
            case "Zumba": sportSum = 34; break;
            case "Dances": sportSum = 51; break;
            case "Pilates": sportSum = 39; break;
        }
    } else if (gender === "f") {

        switch (sport) {
            case "Gym": sportSum = 35; break;
            case "Boxing": sportSum = 37; break;
            case "Yoga": sportSum = 42; break;
            case "Zumba": sportSum = 31; break;
            case "Dances": sportSum = 53; break;
            case "Pilates": sportSum = 37; break;
        }
    }

    if(age <= 19) {
        sportSum =  sportSum * 0.80;
    }

    if(availableSum < sportSum) {
        console.log(`You don't have enough money! You need $${(sportSum - availableSum).toFixed(2)} more.`);
    } else {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }
}
fitnessCard(["10",
"m",
"50",
"Pilates"])





