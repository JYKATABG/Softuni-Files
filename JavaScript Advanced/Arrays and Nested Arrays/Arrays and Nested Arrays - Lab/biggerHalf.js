function biggerHalf(input) {

    let sorted = input.sort((a,b) => b - a);

    let result = sorted.slice(sorted.length / 2)
    console.log(result);
}
biggerHalf([4, 7, 2, 5])