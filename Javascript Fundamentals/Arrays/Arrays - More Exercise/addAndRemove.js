function addAndRemove(array) {

    let result = 0;

    let newArray = [];
    
    for(let i = 0;i < array.length;i++) {
        if(array[i] === "add") {
            result += 1;
        } else if(array[i] === "remove") {
            result -= 1;
        }
        newArray.push(result)
    }

    console.log(newArray.join(" "))
}
addAndRemove(['add', 'add', 'add', 'add'])