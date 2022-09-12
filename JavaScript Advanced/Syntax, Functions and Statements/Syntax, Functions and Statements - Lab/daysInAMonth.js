function daysInAMonth(month,year) {

    let getDays = (month,year) => {
        return new Date(month,year, 0).getDate();
    }
    let daysInMonth = getDays(year,month);
    console.log(daysInMonth);
}
daysInAMonth(2, 2021)