function lunchBreak(input) {
    let movieName = input[0]
    let durationTime = Number(input[1])
    let rest = Number(input[2])

    let lunchTime = rest *  1 / 8;
    let restTime = rest * 1 / 4;
    let leftTime = rest - lunchTime - restTime;

    if (leftTime >= durationTime) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime - durationTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(durationTime - leftTime)} more minutes.`)
    }
    
}

lunchBreak(["Game of Thrones",
"60",
"96"])


