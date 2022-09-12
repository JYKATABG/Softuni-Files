function requiredReading(pageNumbers, readedPages, readedDays) {

    let totalTime = (pageNumbers / readedPages) / 1;
    let requiredHours = totalTime / readedDays;
    console.log(requiredHours);

}
requiredReading(150, 16, 2)