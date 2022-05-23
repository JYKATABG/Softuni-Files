function pastryShop(input) {

    let desert = input[0]
    let desertNumber = Number(input[1])
    let dayOfMonth = Number(input[2])

    let sum = 0;
    let promoSum = 0;

    if (dayOfMonth <= 15) {
        switch (desert) {
            case "Cake": sum += 24; break;
            case "Souffle": sum += 6.66; break;
            case "Baklava": sum += 12.60; break;
        }
    } else if(dayOfMonth > 15) {
        switch (desert) {
            case "Cake": sum += 28.70; break;
            case "Souffle": sum += 9.80; break;
            case "Baklava": sum += 16.98; break;
        }
    }

    let price = desertNumber * sum

    if(dayOfMonth <= 22) {
        if(price >= 100 && price <= 200) {
            price *= 0.85
            }else if (price > 200) {
                price *= 0.75
            } 
    }
    
    if (dayOfMonth <= 15) {
        promoSum = price * 0.90
        console.log(promoSum.toFixed(2));
    } else {
        console.log(price.toFixed(2));
    }
}
pastryShop(["Cake",
"5",
"12"])







