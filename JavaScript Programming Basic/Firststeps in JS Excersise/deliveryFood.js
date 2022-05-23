function deliveryFood(input) {
    let chickenMenu = Number(input[0])
    let fishMenu = Number(input[1])
    let vegeMenu = Number(input[2])

    let chickenMenuPrice = chickenMenu * 10.35
    let fishMenuPrice = fishMenu * 12.40
    let vegeMenuPrice = vegeMenu * 8.15

    let totalMenusPrice = chickenMenuPrice + fishMenuPrice + vegeMenuPrice
    let dessertPrice = totalMenusPrice * 0.20

    let totalSum = totalMenusPrice + dessertPrice + 2.50
    console.log(totalSum)
}

deliveryFood(["2 ","4 ","3 "])