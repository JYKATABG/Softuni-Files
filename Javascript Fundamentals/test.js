function test(numbers) {

    let newArray = []

    let sortedNumbers = numbers.sort((a,b)=> a - b);
    let slicedNumbers = sortedNumbers.slice(0,2)
    console.log(slicedNumbers.join(" "));

}
test([3, 0, 10, 4, 7, 3])
