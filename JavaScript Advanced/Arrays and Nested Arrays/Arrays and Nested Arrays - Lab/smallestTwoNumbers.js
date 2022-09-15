function smallestTwoNumbers(input) {

    let sortedNumbers = input.sort((a, b) => a - b);
    let result = sortedNumbers.slice(0, 2)
    console.log(result);
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);