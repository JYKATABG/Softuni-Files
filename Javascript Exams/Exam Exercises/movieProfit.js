function movieProfit(input) {
    let name = input[0]
    let days = Number(input[1])
    let tickets = Number(input[2])
    let ticketPrice = Number(input[3])
    let cinemaPercent = Number(input[4])

    let ticketForDay = tickets * ticketPrice;
    let periodProfit = days * ticketForDay;
    let profitForCinema = periodProfit * cinemaPercent / 100;

    let cinemaProfit = periodProfit - profitForCinema
    console.log(`The profit from the movie ${name} is ${cinemaProfit.toFixed(2)} lv.`);
}

movieProfit(["Python Basics", "40", "34785", "10.45", "14"])