function numbersSum(input) {
    let index = 0;
    let number = Number(input[index])
    index++;
    let sum = 0;

    while(sum < number) {
        let num = Number(input[index])
        index++;

        sum += num
    }
    console.log(sum);
}
numbersSum(["100",
"10",
"20",
"30",
"40"])
