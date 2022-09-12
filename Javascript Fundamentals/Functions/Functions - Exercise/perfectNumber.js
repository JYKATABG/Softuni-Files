function perfectNumber(number) {

    let divisorNumber = 1;

    for(let i = 2;i < number;i++) {
        if(number % i === 0) {
            divisorNumber += i
        }
    }

    let result = (divisorNumber === number) ? "We have a perfect number!" : "It's not so perfect."

    console.log(result);

}
perfectNumber(1236498)