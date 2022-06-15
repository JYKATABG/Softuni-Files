function processOddNumbers(numbers) {

    let processNumbers = numbers.filter((el,i)=> i % 2 === 1).map(x=>x * 2).reverse().join(" ")

    console.log(processNumbers);
}
processOddNumbers([3, 0, 10, 4, 7, 3])