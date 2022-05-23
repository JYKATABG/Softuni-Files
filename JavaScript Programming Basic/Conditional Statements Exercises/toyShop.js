function toyShop(input) {
    let tripPrice = Number(input[0])
    let puzzelsNumber = Number(input[1])
    let dollsNumber = Number(input[2])
    let bearsNumber = Number(input[3])
    let minionsNumber = Number(input[4])
    let trucksNumber = Number(input[5])
    
    let puzzelsNumberPrice = puzzelsNumber * 2.60;
    let dollsNumberPrice = dollsNumber * 3;
    let bearsNumberPrice = bearsNumber * 4.10;
    let minionsNumberPrice = minionsNumber * 8.20;
    let trucksNumberPrice = trucksNumber * 2;

    let totalToys = puzzelsNumberPrice + dollsNumberPrice + bearsNumberPrice + minionsNumberPrice + trucksNumberPrice;
    let toysCount = puzzelsNumber + dollsNumber + bearsNumber + minionsNumber + trucksNumber;

    if (toysCount >= 50) {
        totalToys = totalToys * 0.75
    }

    let rent = totalToys * 0.90;

    if (rent >= tripPrice) {
        console.log(`Yes! ${(rent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - rent).toFixed(2)} lv needed.`);
    }
        
}

toyShop(["40.8","20","25","30","50","10"])


