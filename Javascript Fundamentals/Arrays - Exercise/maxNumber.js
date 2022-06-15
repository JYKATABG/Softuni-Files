function test(array) {

  let newArray = []
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
      let isLargest = true;
      let number1 = array[i]

      for (let j = i + 1; j < arrayL; j++) {
          let number2 = array[j]

          if (number1 <= number2) {
              isLargest = false;
          }
      }
      if (isLargest) {
          newArray.push(number1)
      }
  }
  console.log(newArray.join(" "));

}
maxNumber([14, 24, 3, 19, 15, 17]);
