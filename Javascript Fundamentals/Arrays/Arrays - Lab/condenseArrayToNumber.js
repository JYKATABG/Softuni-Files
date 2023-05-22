function condenseToNumber(input) {

    while (input.length > 1) {
        let temp = [input.length - 1];
        for (let i = 0; i < input.length - 1; i++) {
            temp[i] = input[i] + input[i + 1];
        }

        input = temp;
    }
    return String(input);
}
console.log(condenseToNumber([5, 0, 4, 1, 2]));