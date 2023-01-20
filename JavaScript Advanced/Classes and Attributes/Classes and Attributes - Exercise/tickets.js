function tickets(descriptions, sortCritery) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let resultArray = [];

    for (let el of descriptions) {
        let [destinationName, price, status] = el.split("|");
        let currentTicket = new Ticket(destinationName, Number(price), status)
        resultArray.push(currentTicket);
    }

    switch (sortCritery) {
        case "destination":
            result = resultArray.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            })
            break;

        case "price":
            result = resultArray.sort((a, b) => {
                return a.price - b.price;
            })
            break;

        case "status":
            result = resultArray.sort((a, b) => {
                return a.status.localeCompare(b.status)
            });
            break;
    }
    return resultArray;

}
let res = tickets(tickets['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
)
console.log(res);