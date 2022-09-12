function sumFirstAndLast(array) {

    let firstElement = array[0]
    let secondElement = array.pop()

    console.log(Number(firstElement) + Number(secondElement));
}
sumFirstAndLast(['5'])