function easterCompetition(input) {

    let index = 0;
    let easterBread = Number(input[index])
    index++;
    let command = input[index]
    index++;
    let points = 0;
    let localpoints = 0;
    let counter = 0;
    let bestChef = "";
    let bestPoints = 0;

    for (let i = 0; i < easterBread; i++) {
        counter++;
        points = 0;
        let chef = command
        command = input[index];
        index++;

        while (command !== "Stop") {
            localpoints = Number(command)
            points += localpoints;

            command = input[index];
            index++;
        }

        console.log(`${chef} has ${points} points.`);

        // if (points >= bestPoints) {
        //     console.log(`${chef} is the new number 1!`);
        // }

        if (points > bestPoints) {
            bestPoints = points;
            bestChef = chef
            console.log(`${chef} is the new number 1!`);
        }

        // if (counter === 1) {
        //     console.log(`${chef} has ${points} points.`);
        // } else {
        //     console.log(`${chef} has ${points} points.`);
        // }

        command = input[index];
        index++;
    }

    console.log(`${bestChef} won competition with ${bestPoints} points!`);

}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

