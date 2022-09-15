function sameNumbers(input) {

    let isValid = true;
    let sum = 0;
    let inputLenght = input.toString();
    let firstDigit = inputLenght[0];

    for (let i = 0; i < inputLenght.length; i++) {
        if (inputLenght[i] !== firstDigit) {
            isValid = false;
        }
        sum += Number(inputLenght[i])
    }
    console.log(isValid);
    console.log(sum);
}
sameNumbers(1234)