function onTimeForTheExam(input) {
    let hoursExam = Number(input[0])
    let minutesExam = Number(input[1])
    let arriveHours = Number(input[2])
    let arriveMinutes = Number(input[3])

    let timeExam = hoursExam * 60 + minutesExam;
    let timeArrive = arriveHours * 60 + arriveMinutes;

    if (timeExam < timeArrive) {
        console.log("Late");
        let time = Math.abs(timeArrive - timeExam);
        if (time >= 60) {
            let h = Math.floor(time / 60);
            let min = time % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`);
        }
    } else if (timeExam === timeArrive || timeExam - timeArrive <= 30) {
        console.log("On time");
        let beforeTime = Math.abs(timeArrive - timeExam)

        if (beforeTime !== 0) {
            console.log(`${beforeTime} minutes before the start`);
        }
    } else {
        console.log("Early");
        let earlyTime = Math.abs(timeArrive - timeExam)

        if (earlyTime >= 60) {
            let h = Math.floor(earlyTime / 60)
            let min = earlyTime % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${earlyTime} minutes before the start`);
        }
    }
}
onTimeForTheExam(["11",
    "30",
    "10",
    "55"])










