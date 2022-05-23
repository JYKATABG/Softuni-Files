function sumSeconds(input) {
    let racer1 = Number(input[0])
    let racer2 = Number(input[1])
    let racer3 = Number(input[2])

    let totalTime = racer1 + racer2 + racer3
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(` ${minutes}:0${seconds} `)
    } else {
        console.log(` ${minutes}:${seconds} `)
    }
    
}

sumSeconds(["35","45","44"])