function inchToCm(input) {
    let number = Number(input[0])
    let cm = 2.54
    let ress = number * cm
    console.log(`${number} inch * ${cm} = ${ress} cm`)
}

inchToCm([5])