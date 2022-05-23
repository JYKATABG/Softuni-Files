function programmingBook(input) {
    let listPrice = Number(input[0])
    let coverPrice = Number(input[1])
    let percentPromo = Number(input[2])
    let designerPrice = Number(input[3])
    let totalPromoPrice = Number(input[4])

    let printingPrice = (listPrice * 899) + (coverPrice * 2);
    let promoPrice = percentPromo / 100
    let printAfterPromotion = printingPrice - ((percentPromo / 100) * printingPrice)

    let designerExpenses = printAfterPromotion + designerPrice
    

    let totalSum = designerExpenses - ((totalPromoPrice / 100) * designerExpenses);
    console.log(`Avtonom should pay ${totalSum.toFixed(2)} BGN.`); 
}
programmingBook(["0.02",
"0.50",
"18",
"21",
"50"])



