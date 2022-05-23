function poolDay(input) {
    let firstRow = Number(input[0])
    let secondRow = Number(input[1])
    let thirdRow = Number(input[2])
    let forthRow = Number(input[3])

    let enterTax = firstRow * secondRow;
    let percent75 = Math.round(firstRow * 0.75)
    let sunbed = percent75 * thirdRow;

    let percent50 = Math.round(firstRow * 0.50)
    let umbrella = percent50 * forthRow;

    let totalPrice = enterTax + sunbed + umbrella;
    console.log(`${totalPrice.toFixed(2)} lv.`);

}
poolDay(["21",
"5.50",
"4.40",
"6.20"])



