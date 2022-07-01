function theLift(input) {

    let passengers = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number);

    if (passengers) {
        for (let i = 0; i < wagons.length; i++) {
            let currentWagon = wagons[i]

            while (currentWagon !== 4) {
                passengers--;
                currentWagon++;

                if (passengers === 0) {
                    break;
                }
            }

            wagons[i] = currentWagon;
            
            if (passengers === 0) {
                break;
            }
        }
    }
    let isFiltered = wagons.filter(x => x !== 4)
    console.log(isFiltered);

    if (isFiltered.length === 0 && passengers === 0) {
        console.log(wagons.join(" "));
    } else if (isFiltered.length !== 0) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(" "));
    }
}
theLift([
    "15",
    "0 0 0 0 0"
   ])