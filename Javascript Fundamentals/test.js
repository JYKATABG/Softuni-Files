function test(numbers) {

    let result = numbers.sort((a,b) => a - b).slice(0,2).join(" ")

    console.log(result);

    

}
test([3, 0, 10, 4, 7, 3])
