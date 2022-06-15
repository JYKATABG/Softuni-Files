function firstAndLastKNumbers(n,k) {

    let sequence = [1]

    for(let i = 0;i < n - 1;i++) {
        let sequenceK = sequence.slice(-k)
        let sum = 0;
        for(let el of sequenceK) {
            sum += el
        }
        sequence.push(sum)
    }

    console.log(sequence);

}
firstAndLastKNumbers(6, 3)