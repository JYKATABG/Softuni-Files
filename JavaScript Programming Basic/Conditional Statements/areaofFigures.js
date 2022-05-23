function areaOfFigures(input) {
    let type = input[0]
    let number = 0

    if (type === "square") {
        let a = Number(input[1])
        number = Math.pow(a, 2)
        
    } else if (type === "rectangle") {
        let a = Number(input[1])
        let b = Number(input[2])
        number = a * b
    } else if (type === "circle") {
        let r = Number(input[1])
        number = Math.pow(r, 2) * Math.PI
    } else if (type === "triangle") {
        let a = Number(input[1])
        let ha = Number(input[2])
        number = a * ha / 2
    }

    console.log(number.toFixed(3))
}

areaOfFigures(["square", "5"])


