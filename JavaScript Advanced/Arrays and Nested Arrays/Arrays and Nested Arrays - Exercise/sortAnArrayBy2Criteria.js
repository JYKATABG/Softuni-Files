function sortAnArrayBy2Criteria(input) {

    let sortedArray = input.sort((a,b) => {
        if(a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b)
        };
    })
    console.log(sortedArray.join("\n"));
}
sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma'])
