function destinationMapper(input) {

    let pattern = /([=/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let arr = [];
    let travelPoints = 0;
    let match = pattern.exec(input);

    while (match !== null) {
        let destination = match[2]
        arr.push(destination)
        travelPoints += destination.length

        match = pattern.exec(input)
    }
    console.log(`Destinations: ${arr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("ThisIs some InvalidInput")
