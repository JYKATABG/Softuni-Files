function test(array) {

    let arrayOfNumbers = array.shift().split(" ").map(Number);

    for (let i = 0; i < array.length; i++) {

        let currentCommand = array[i].split(" ")

        switch (currentCommand[0]) {
            case "Add":
                arrayOfNumbers.push(Number(currentCommand[1]))
                break;
            case "Remove":
                arrayOfNumbers.filter(el => el !== Number(currentCommand[1]))
                break;
            case "RemoveAt":
                arrayOfNumbers.splice(currentCommand[1],1)
                break;
            case "Insert":
                arrayOfNumbers.splice((currentCommand[1],0,Number(currentCommand[2])))
        }
    }

    console.log(arrayOfNumbers);

}
test(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)
