function mountainRun(input) {
    let recordSeconds = Number(input[0])
    let range = Number(input[1])
    let time = Number(input[2])

    let needToClimb = range * time
    let addedTime = (Math.floor(range/50) * 30)
    let totalTime = needToClimb + addedTime

    if(recordSeconds > totalTime) {
        console.log(`Yes! The new record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
"389",
"3"])


