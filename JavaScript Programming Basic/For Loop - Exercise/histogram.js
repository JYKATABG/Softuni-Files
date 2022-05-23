function histogram(input) {
    let numbersCount = Number(input[0])

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let index = 1; index <= numbersCount; index++) {
        let previousNumber = Number(input[index])

        if(previousNumber < 200) {
            p1++;
        } else if (previousNumber <= 399) {
            p2++;
        } else if (previousNumber <= 599) {
            p3++;
        } else if(previousNumber <= 799) {
            p4++;
        } else if(previousNumber >= 800) {
            p5++;
        }
    }

    console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

