function sumDigits(number) {

    let sum = 0;
    let toString = number.toString();

    for(let i = 0; i < toString.length;i++) {
        sum += Number(toString[i])
    }
    console.log(sum);
}
sumDigits(97561)