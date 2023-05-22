function equalArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
        if (arr1[i] !== arr2[i]) {
            sum = 0;
            return `Arrays are not identical. Found difference at ${i} index`
        }
    }
    return `Arrays are identical. Sum: ${sum}`;
}

console.log(equalArrays(['10'], ['10']
));