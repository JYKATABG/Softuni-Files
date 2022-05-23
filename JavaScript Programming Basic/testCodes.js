function script(input) {

    let index = 0;
    let locationNumber = Number(input[index])
    index++;

    let minedGold = 0;

    for(let i = 1; i <= locationNumber;i++) {
        let expectedMine = Number(input[index])
        index++;

        let dayNumber = Number(input[index]) 
        index++;

        let minedSum = 0;
        let daysCount = 1;
        let sumGold = 0;

        while(daysCount <= dayNumber) {
            daysCount++;
            let goldForDay = Number(input[index])
            index++;

            minedSum += goldForDay;

        }
        sumGold += minedSum / dayNumber;

        if(sumGold >= expectedMine) {
            console.log(`Good job! Average gold per day: ${sumGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedMine - sumGold).toFixed(2)} gold.`);
        }
    }

}
script(["1",
"5",
"3",
"10",
"1",
"3"])






