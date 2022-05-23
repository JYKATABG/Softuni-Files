function fishTank(input) {
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let capacity = length * width * height * 1
    let volume = capacity * 0.001
    let requiredLiters = volume * (1 - 0.17)
    console.log(requiredLiters)
}

fishTank(["85 ","75 ","47 ","17 "])