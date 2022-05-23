function puppyCare(input) {

    index = 0;
    let food = Number(input[index])
    index++;

    let command = input[index] 
    index++;
    let eatenFoodSum = 0;
    let allFood = food * 1000;

    while(command !== "Adopted") {
        let foodEaten = Number(command)

        eatenFoodSum += foodEaten

        command = input[index]
        index++;
    }

    if(allFood >= eatenFoodSum) {
        console.log(`Food is enough! Leftovers: ${allFood - eatenFoodSum} grams.`);
    } else {
        console.log(`Food is not enough. You need ${eatenFoodSum - allFood} grams more.`);
    }

}
puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])