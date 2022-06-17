function houseParty(array) {

    let resultArray = []

    for(let element of array) {

        let command = element.split(" ");
        let name = command[0]

        if(command.length === 3) {
            if(resultArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                resultArray.push(name)
            }
        } else {
            if(!resultArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = resultArray.indexOf(name)
                resultArray.splice(index,1)
            }
        }
    }
    console.log(resultArray.join("\n"));

}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)