function birthday(input) {
    let hallRentPrice = Number(input[0])

    let cakePrice = hallRentPrice * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = hallRentPrice / 3;

    let totalSum = hallRentPrice + cakePrice + drinksPrice + animatorPrice;
    console.log(totalSum.toFixed(2));
}
birthday(["2250"])