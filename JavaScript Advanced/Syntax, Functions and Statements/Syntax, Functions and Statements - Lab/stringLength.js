function stringLength(wordOne, wordTwo, wordThree) {

    let firstLenght = wordOne.length;
    let secondLenght = wordTwo.length;
    let thirdLenght = wordThree.length;

    let sum = firstLenght + secondLenght + thirdLenght;

    console.log(sum);
    console.log(Math.floor(sum / 3));
}
stringLength('pasta', '5', '22.3')