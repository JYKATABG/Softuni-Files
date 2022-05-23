function oskars(input) {
    let actorName = input[0]
    let academyPoints = Number(input[1])
    let numberAppraisers = Number(input[2])


    for (let index = 3; index < input.length; index++) {

        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            academyPoints += total
        }
        if (academyPoints > 1250.5) {
            break;
            console.log();
        }
    }
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(academyPoints).toFixed(1)}!`);
    }
}
oskars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

