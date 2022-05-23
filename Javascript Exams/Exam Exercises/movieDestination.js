function movieDestination(input) {
    let filmBudget = Number(input[0])
    let destination = input[1]
    let season = input[2]
    let days = Number(input[3])

    let priceForDay = 0;


    if (destination === "Dubai") {

        switch (season) {
            case "Winter": priceForDay = 45000 * days;
                priceForDay = priceForDay * 0.70;
                break;
            case "Summer": priceForDay = 40000 * days;
                priceForDay = priceForDay * 0.70;
                break;
        }

    } else if (destination === "Sofia") {

        switch (season) {
            case "Winter": priceForDay = 17000 * days;
                priceForDay = priceForDay * 1.25;
                break;
            case "Summer": priceForDay = 12500 * days;
                priceForDay = priceForDay * 1.25;
                break;
        }

    } else if (destination === "London") {

        switch (season) {
            case "Winter": priceForDay = 24000 * days; break;
            case "Summer": priceForDay = 20250 * days; break;
        }

    }


    
    if (filmBudget > priceForDay) {


        console.log(`The budget for the movie is enough! We have ${(filmBudget - priceForDay).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(priceForDay - filmBudget).toFixed(2)} leva more!`);
    }

}
movieDestination(["1000000",
"Dubai",
"Summer",
"5"])



