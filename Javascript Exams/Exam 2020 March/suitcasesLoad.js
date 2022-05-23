function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index])
    index++;

    let command = input[index]
    index++;
    let counter = 0;
    let isLoaded = true;

    while (command !== "End") {
        counter++;

        let suitCase = Number(command)

        if (counter % 3 === 0) {
            suitCase *= 1.1;
        }

        capacity -= suitCase;

        if (capacity < 0) {
            counter--;
            console.log(`No more space!`);
            isLoaded = false;
            break;
        }

        command = input[index]
        index++;
    }
    if (isLoaded) {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"])

