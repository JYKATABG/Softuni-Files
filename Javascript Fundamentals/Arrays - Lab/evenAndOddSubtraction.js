function evenAndOddSubtraction(number) {

    let odd = 0;
    let even = 0;
    let result = []

    for(let i = 0;i < number.length;i++) {
        number[i] = Number(number[i])
    }
    for(let num of number) {
        if(num % 2 === 0) {
            odd += num
        } else {
            even += num
        }
    }
    let total = odd - even;
    console.log(total);
}
evenAndOddSubtraction([3,5,7,9])
