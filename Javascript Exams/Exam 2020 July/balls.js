function balls(input) {

    let index = 1
    let n = Number(input[0])

    let points = 0;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;

    let otherColors = 0;
    let divides = 0;

    for (let i = 0; i < n; i++) {
        let colors = input[index]
        index++;

        switch (colors) {
            case "red":
                redBalls++;
                points += 5
                break;
            case "orange":
                orangeBalls++;
                points += 10;
                break;
            case "yellow":
                yellowBalls++;
                points += 15;
                break;
            case "white":
                whiteBalls++;
                points += 20;
                break;
            case "black":
                blackBalls++;
                divides++;
                points = Math.floor(points / 2)
                break;

                default: otherColors++;
        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${divides}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

