function test(arr1,arr2) {

    for(let i = 0; i < arr1.length;i++) {
        arr1[i] = Number(arr1[i])
    }

    for(let i = 0;i < arr2.length;i++) {
        arr2[i] = Number(arr2[i])
    }

    if(arr1 === arr2) {
        console.log();
    }
}
test(['10','20','30'], ['10','20','30'])