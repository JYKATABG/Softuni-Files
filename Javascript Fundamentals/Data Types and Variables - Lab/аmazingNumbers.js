function amazingNumbers(number) {

    let numToString = String(number)
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
    }

    console.log(`${number} Amazing? ${sum.toString().indexOf("9") >= 0 ? "True" : "False"}`);

}
amazingNumbers(999)