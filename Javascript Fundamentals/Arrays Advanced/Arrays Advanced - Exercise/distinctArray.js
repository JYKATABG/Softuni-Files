function distinctArray(array) {

    let resultArray = []

    for(let i = 0;i < array.length;i++) {
        if(!resultArray.includes(array[i])) {
            resultArray.push(array[i])
        }
    }

    console.log(resultArray.join(" "));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])