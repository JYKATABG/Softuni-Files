function firstAndLastKNumbers(numbers) {

    let k = numbers.shift()

    let firstKNumber = numbers.slice(0,k)
    let secondKNumber = numbers.slice(-k)
    console.log(firstKNumber.join(" "));
    console.log(secondKNumber.join(" "));

}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   )