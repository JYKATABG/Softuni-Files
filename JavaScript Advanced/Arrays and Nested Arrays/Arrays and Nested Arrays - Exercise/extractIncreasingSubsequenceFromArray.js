function extractIncreasingSubsequenceFromArray(input) {

    let result = []
    let biggestNum = input[0];

    for (let el of input) {
        if (el >= biggestNum) {
            result.push(el);
            biggestNum = el;
        }
    }
    return result;
}
let solve = extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
);

console.log(solve);