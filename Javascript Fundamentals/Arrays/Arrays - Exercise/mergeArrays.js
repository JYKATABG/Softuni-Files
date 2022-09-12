function mergeArrays(arr1,arr2) {

    let newArray = []
    let inputL = arr1.length;

    for(let i = 0; i < inputL;i++) {
        if(i % 2 === 0) {
            newArray[i] = Number(arr1[i]) + Number(arr2[i])
        } else {
            newArray[i] = arr1[i] + arr2[i]
        }
    }
    console.log(newArray.join(" - "));

}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)