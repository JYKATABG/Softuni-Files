function replaceRepeatingChars(input) {

    let index = 1;
    let end = input.length;
    let result = input[0]

    while(index < input.length) {
        if(input[index] !== input[index - 1]) {
            result += input[index]
        }
        index++;
    }
    console.log(result);
}
replaceRepeatingChars('qqqwerqwecccwd')