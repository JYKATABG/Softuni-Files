function mathOperations(firstNum, secondNum, symbol) {

    let result;

    switch (symbol) {
        case "+":
            result = firstNum + secondNum;
            break;

        case "-":
            result = firstNum - secondNum;
            break;

        case "*":
            result = firstNum * secondNum;
            break;

        case "/":
            result = firstNum / secondNum;
            break;

        case "%":
            result = firstNum % secondNum;
            break;

        case "**":
            result = firstNum ** secondNum;
            break;
    }
    console.log(result);
}
mathOperations(3, 5.5, '*')