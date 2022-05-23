function vacationBookList(input) {
    let pagesNumber = Number(input[0])
    let hours = Number(input[1])
    let days = Number(input[2])

    let timeToRead = pagesNumber / hours
    let neededHours = timeToRead / days
    console.log(neededHours)
}

vacationBookList(["212 ","20 ","2 "])