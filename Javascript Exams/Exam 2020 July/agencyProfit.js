function agencyProfit(input) {

    let companyName = input[0]
    let ticketNumber = Number(input[1])
    let kidTickets = Number(input[2])
    let ticketPrice = Number(input[3])
    let tax = Number(input[4])

    let kidTicketPriece = ticketPrice * 0.30;
    let adultTicketPrice = ticketPrice + tax;
    let kidTicketTax = kidTicketPriece + tax;

    let totalSum = (kidTickets * kidTicketTax) + (ticketNumber * adultTicketPrice)
    let profit = totalSum * 0.20
    
    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

