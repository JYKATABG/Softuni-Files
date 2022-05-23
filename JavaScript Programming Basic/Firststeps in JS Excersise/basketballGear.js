function basketballGear(input) {
    let yearTax = Number(input[0])

    let traningPrice = yearTax * 0.60
    let outfit = traningPrice * 0.80
    let ball = outfit / 4
    let accessories = ball / 5

    let totalPrice = yearTax + traningPrice + outfit + ball + accessories
    console.log(totalPrice)
}

basketballGear(["365 "])