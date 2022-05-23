function oscarsWeekinCinema(input) {
    
    let firstRow = (input[0])
    let secondRow = (input[1])
    let thirdRow = Number(input[2])

    let ticketPrice = 0;

    if (firstRow === "A Star Is Born") {

        switch(secondRow) {
            case "normal": ticketPrice = thirdRow * 7.50; break;
            case "luxury": ticketPrice = thirdRow * 10.50; break;
            case "ultra luxury": ticketPrice = thirdRow * 13.50; break;
        }

    } else if (firstRow === "Bohemian Rhapsody") {

        switch(secondRow) {
            case "normal": ticketPrice = thirdRow * 7.35; break;
            case "luxury": ticketPrice = thirdRow * 9.45; break;
            case "ultra luxury": ticketPrice = thirdRow * 12.75; break;
        }

    } else if (firstRow === "Green Book") {

        switch(secondRow) {
            case "normal": ticketPrice = thirdRow * 8.15; break;
            case "luxury": ticketPrice = thirdRow * 10.25; break;
            case "ultra luxury": ticketPrice = thirdRow * 13.25; break;
        }
    } else if (firstRow === "The Favourite") {

        switch(secondRow) {
            case "normal": ticketPrice = thirdRow * 8.75; break;
            case "luxury": ticketPrice = thirdRow * 11.55; break;
            case "ultra luxury": ticketPrice = thirdRow * 13.95; break;
        }
    }

    console.log(`${firstRow} -> ${(ticketPrice).toFixed(2)} lv.`);
}
oscarsWeekinCinema(["Green Book","normal","63"])

