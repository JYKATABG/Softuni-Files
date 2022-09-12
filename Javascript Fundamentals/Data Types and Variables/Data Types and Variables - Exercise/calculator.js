function calculator(firstNum, opperator, secondNum) {
  let result = 0;

  switch (opperator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
  }

  console.log(result.toFixed(2));
}
calculator(25.5,
    '-',
    3
    );
