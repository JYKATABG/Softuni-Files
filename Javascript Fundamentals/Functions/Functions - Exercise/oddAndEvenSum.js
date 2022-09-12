function oddAndEvenSum(number) {

    let oddNumber = 0;
    let evenNumber = 0;
    let toString = String(number)

    for(let digit of toString) {
        
        let digitToNumber = Number(digit)
        
        if(digit % 2 === 0) {
            evenNumber += digitToNumber
        } else {
            oddNumber += digitToNumber
        }
    }

    console.log(`Odd sum = ${oddNumber}, Even sum = ${evenNumber}`);

}
oddAndEvenSum(3495892137259234)