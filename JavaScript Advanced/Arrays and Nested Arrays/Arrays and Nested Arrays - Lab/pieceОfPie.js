function pieceOfPie(pies, firstPie, secondPie) {

    let indexOfFirstPie = pies.indexOf(firstPie);
    let indexOfSecondPie = pies.indexOf(secondPie);

    return pies.slice(indexOfFirstPie, indexOfSecondPie + 1);

}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))