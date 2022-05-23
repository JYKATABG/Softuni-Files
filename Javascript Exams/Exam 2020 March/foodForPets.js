function foodForPets(input) {

    let index = 0;
    let days = Number(input[index])
    index++;
    let totalFood = Number(input[index])
    index++;
    let catFood = 0;
    let dogFood = 0;
    let totalDogFood = 0;
    let totalCatFood = 0;
    let bonus = 0;
    let totalEatenFood = 0;

    for (let i = 1; i <= days; i++) {
        dogFood = Number(input[index])
        totalDogFood += dogFood;
        index++;
        catFood = Number(input[index])
        totalCatFood += catFood
        index++;


        if (i % 3 === 0) {
            bonus += (dogFood + catFood) * 0.10
        }
    }
    totalEatenFood = totalCatFood + totalDogFood;
    bonus = Math.round(bonus)
    console.log(`Total eaten biscuits: ${bonus}gr.`);
    console.log(`${((totalEatenFood / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFood / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFood / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}   
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

