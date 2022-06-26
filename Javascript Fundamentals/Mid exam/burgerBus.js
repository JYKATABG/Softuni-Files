function burgerBus(input) {

    let numberofCity = Number(input.shift());

    let index = 0;
    let command = input[index]
    let buff = "";
    let sum = 0;
    let totalSum = 0;
    
    for(let i = 1;i <= numberofCity;i++) {

            sum = 0;

            let cityName = input[index];
            buff = cityName
            index++;
            let earnedMoney = Number(input[index])
            sum += earnedMoney;
            index++;
            let ownerExpenses = Number(input[index])
            sum -= ownerExpenses;
            if(i === 3) {
                ownerExpenses = ownerExpenses * 1.5 
            }  else if(i === 5) {
                earnedMoney -= earnedMoney * 0.1;
            } 

            profitPerCity = earnedMoney - ownerExpenses;
            totalSum += profitPerCity
            console.log(`In ${buff} Burger Bus earned ${profitPerCity.toFixed(2)} leva.`);
            index++;  
            
    }
    console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`);

}
burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"])
;