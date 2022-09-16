function sortingNumbers(numbers) {
    let result = [];

    let sortedArray = numbers.sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length / 2; i++) {
        result.push(sortedArray[i])
        result.push(sortedArray[(numbers.length - 1) - i])
    }
    return result
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
