function easterBakery(input) {
    let flourOneKg = Number(input[0])
    let flourKg = Number(input[1])
    let sugarKg = Number(input[2])
    let eggsNumber = Number(input[3])
    let mayPackage = Number(input[4])

    let sugarKgPrice = flourOneKg * 0.75;
    let eggPackagePrice = flourOneKg * 1.1;
    let mayPackagePrice = sugarKgPrice * 0.2;
    let flourSum = flourOneKg * flourKg;
    let sugarSum = sugarKgPrice * sugarKg;
    let eggsSum = eggPackagePrice * eggsNumber;
    let maySum = mayPackagePrice * mayPackage;
    let totalSum = flourSum + sugarSum + eggsSum + maySum
    console.log(totalSum.toFixed(2));
}
easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])

