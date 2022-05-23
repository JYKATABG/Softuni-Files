function easterEggs(input) {

    let paintedEggs = Number(input[0])
    let index = 1;

    let redColor = 0;
    let orangeColor = 0;
    let blueColor = 0;
    let greenColor = 0;

    let maxEggs = 0;
    let maxEggsColor = 0;


    for(let i = 1; i <= paintedEggs; i++) {
        let colors = input[index]

        if(colors === "red") {
            redColor++;
        } else if(colors === "orange") {
            orangeColor++;
        } else if(colors === "blue") {
            blueColor++;
        } else if(colors === "green") {
            greenColor++;
        }
        index++;
    }

    maxEggs = redColor;
    maxEggsColor = "red";

    if(orangeColor > maxEggs) {
        maxEggs = orangeColor;
        maxEggsColor = "orange"
    }

    if(blueColor > maxEggs) {
        maxEggs = blueColor;
        maxEggsColor = "blue";
    }

    if(greenColor > maxEggs) {
        maxEggs = greenColor;
        maxEggsColor = "green"
    }

    console.log(`Red eggs: ${redColor}`);
    console.log(`Orange eggs: ${orangeColor}`);
    console.log(`Blue eggs: ${blueColor}`);
    console.log(`Green eggs: ${greenColor}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`);
}
easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) 

