function dayOfWeek(n) {
    if(n < 1 || n > 7) {
        console.log("Invalid day!");
    } else {
        let dayInNumArr = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
        console.log(dayInNumArr[n - 1]);
    }
}
dayOfWeek([11])