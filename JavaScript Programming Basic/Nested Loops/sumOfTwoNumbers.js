function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0])
    let endNumber = Number(input[1])
    let magicNumber = Number(input[2])
    let isFinished = false;
    let combinations = 0;
    let firstNum = 0;
    let secondNum = 0;

    for(let a = startNumber; a <= endNumber; a++) {
        for(let b = startNumber; b <= endNumber; b++) {
            combinations++;
            if(a + b === magicNumber) {
                isFinished = true;
                firstNum = a;
                secondNum = b;
                break;
            }
        }
        if(isFinished) {
            break;
        }
    }

    if(isFinished) {
        console.log(`Combination N:${combinations} (${firstNum} + ${secondNum} = ${magicNumber})`);
    } else {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])

