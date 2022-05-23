function catWalking(input) {

    let walkingsTime = Number(input[0])
    let walkingsNumber = Number(input[1])
    let caloriesForDay = Number(input[2])

    let totalWalkingTime = walkingsTime * walkingsNumber
    let totalcaloriesForDay = totalWalkingTime * 5
    let calories = caloriesForDay * 0.50

    if(totalcaloriesForDay >= calories) {
        
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalcaloriesForDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalcaloriesForDay}.`);
    }

}
catWalking(["40",
"2",
"300"])




