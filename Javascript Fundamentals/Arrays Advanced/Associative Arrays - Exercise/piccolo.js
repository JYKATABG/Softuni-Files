function piccolo(data) {

    let parking = new Set();

    for (let line of data) {
        let [command, carNumber] = line.split(", ");
        switch (command) {
            case "IN":
                parking.add(carNumber)
                break;
            case "OUT":
                parking.delete(carNumber)
                break;
        }
    }

    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    }

    let sortedParking = Array.from(parking.values()).sort();

    for (let line of sortedParking) {
        console.log(line);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);