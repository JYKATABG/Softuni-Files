let projectionType = "Premiere"

const schedule = {
    "Premiere": 12.00,
    "Normal": 7.50,
    "Discount": 5.50
}
if (schedule.hasOwnProperty(projectionType)) {
    let price = schedule[projectionType];
    console.log(price); 
}
