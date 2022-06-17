function test(numbers) {

    let result = numbers.filter(x => x < 5).sort((a,b) => a - b).splice(-2).map(x => x * 2).reverse().join(" ")
    console.log(result);

}
test([3, 0, 10, 4, 7, 3])
