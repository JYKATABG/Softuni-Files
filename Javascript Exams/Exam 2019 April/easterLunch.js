function easterLunch(input) {

    let easterbread = Number(input[0])
    let eggNumber = Number(input[1])
    let cookiesNumber = Number(input[2])

    let easterbreadPrice = easterbread * 3.20;
    let eggPrice = eggNumber * 4.35;
    let cookiePrice = cookiesNumber * 5.40;

    let eggColorPrice = eggNumber * 12 * 0.15;
    let totalPrice = easterbreadPrice + eggPrice + cookiePrice + eggColorPrice
    console.log(totalPrice.toFixed(2));

}
easterLunch(["2",
"3",
"2"])


