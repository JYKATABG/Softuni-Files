function magicSum(arr,number) {

    let arrOfValidPairs = []
    let Pair = "";

    for(let i = 0; i < arr.length;i++) {
        for(let j = i + 1; j < arr.length;j++) {
            if(arr[i] + arr[j] === number) {
                Pair = `${arr[i]} ${arr[j]}`
                arrOfValidPairs.push(Pair)
            }
        }
    }
    console.log(arrOfValidPairs.join("\n"));
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )