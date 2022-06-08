function simpleCalculator(numOne,numTwo,operator) {

    let res;

    switch(operator) {
        case "multiply":
            res = numOne * numTwo;
            break
        case "divide":
            res = numOne / numTwo;
            break;
        case "add":
            res = numOne + numTwo;
            break;
        case "subtract":
            res = numOne - numTwo;
            //let multiply = (numOne,numTwo) => numOne + numTwo;
            break;
    }

    console.log(res);

}
simpleCalculator(50,
    13,
    'subtract'
    )