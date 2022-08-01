function cutAndReverse(input) {

    let reverse = input.split('').reverse().join('')
    let firstWord = reverse.slice(reverse.length / 2)
    let secondWord = reverse.slice(0, input.length / 2)

    console.log(firstWord);
    console.log(secondWord);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')