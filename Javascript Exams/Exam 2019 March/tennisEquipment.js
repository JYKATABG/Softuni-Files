function tennisEquipment(input) {

    let tennisRacket = Number(input[0])
    let tennisRacketNumber = Number(input[1])
    let shoesNumber = Number(input[2])

    let tennisRacketPrice = tennisRacketNumber * tennisRacket;
    let shoesPrice = tennisRacket / 6;
    let allShoesPrice = shoesNumber * shoesPrice;

    let otherEquipment = (tennisRacketPrice + allShoesPrice) * 0.2;
    let totalPrice = tennisRacketPrice + allShoesPrice + otherEquipment;

    let djokovicPrice = totalPrice / 8;
    let sponsorsPrice = totalPrice * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);

}
tennisEquipment(["386","7","4"])