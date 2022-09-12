function echoFunction(firstWord,secondWord,thirdWord) {

    let firstLenght = firstWord.length;
    let secondLength = secondWord.length;
    let thirdLenght = thirdWord.length;

    let sum = firstLenght + secondLength + thirdLenght;

    let result = Math.floor(sum / 3);

    console.log(result);
    console.log(sum);
   
}
echoFunction("pesho","Goshko","sLIVEN")