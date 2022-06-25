function numbers(arr) {
 
    let arrOfNumbers = arr.split(" ").map(Number)
    let sum = 0;
 
    for(let el of arrOfNumbers) {
        sum += el
    }
 
    let avgNumber = sum / arrOfNumbers.length;
 
    arrOfNumbers = arrOfNumbers.filter(el => el > avgNumber)
            .sort((a,b)=> b - a)
            .slice(0,5)
 
    arrOfNumbers = arrOfNumbers.length > 0 ? arrOfNumbers.join(" ") : "No"
    console.log(arrOfNumbers);
 
 
}
numbers('')