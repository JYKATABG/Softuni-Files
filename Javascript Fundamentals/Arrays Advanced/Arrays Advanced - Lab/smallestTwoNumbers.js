function smallestTwoNumbers(numbers) {

    let result = numbers.sort((a,b) => a - b).splice(0,2).join(" ")
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5])