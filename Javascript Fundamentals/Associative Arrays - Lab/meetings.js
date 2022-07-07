function meetings(input) {

    let resultObj = {}

    for (let el of input) {
        let [day, name] = el.split(" ")

        if (resultObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            resultObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, name] of Object.entries(resultObj)) {
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])