function yardGreening(input) {
    let greeningMeters = Number(input[0])

    let greeningPrice = greeningMeters * 7.61
    let discoundPrice = greeningPrice * 0.18

    let finalPrice = greeningPrice - discoundPrice
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discoundPrice} lv. `)
}

yardGreening(["550"])