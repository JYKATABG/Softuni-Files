function zooMarket(input) {
    let numDogFood = Number(input[0])
    let numCatFood = Number(input[1])
    let dogFoodPrice = 2.50
    let catFoodPrice = 4
    let ress = numDogFood * dogFoodPrice + numCatFood * catFoodPrice
    console.log(`Price ${ress} lv.`)
}

zooMarket([13, 9])