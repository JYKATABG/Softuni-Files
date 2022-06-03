function maxSequenceOfEqualElements(arr) {

    let maxSequence = []

    for(let i = 0;i < arr.length;i++) {
        let currenctSequence = []
        for(let j = i;j < arr.length;j++) {
            if(arr[i] === arr[j]) {
                currenctSequence.push(arr[i])
            } else {
                break;
            }
        }
        if(currenctSequence.length > maxSequence.length) {
            maxSequence = currenctSequence;
        }
    }
    console.log(maxSequence.join(" "));

}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])