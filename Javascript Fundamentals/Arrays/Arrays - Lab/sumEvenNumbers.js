function sumEvenNumbers(numbers) {

    let sum = 0;

    for(let i = 0;i < numbers.length;i++) {
        numbers[i] = Number(numbers[i])
    }

    for(let num of numbers) {
        if(num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum);
}
sumEvenNumbers(['3','5','7','9','4'])