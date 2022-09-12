function arrayManipulations(arr) {

    let arrayOfNumbers = arr.shift().split(" ").map(Number)
    let i;

    for (let i = 0; i < arr.length; i++) {

        let line = arr[i].split(" ");
        let command = line.shift()

        switch (command) {
            case "Add":
                arrayOfNumbers.push(Number(line))
                break;
            case "Remove":
                arrayOfNumbers = arrayOfNumbers.filter(n => n !== Number(line))
                break;
            case "RemoveAt":
                arrayOfNumbers.splice(Number(line), 1)
                break;
            case "Insert":
                
                arrayOfNumbers.splice(Number(line[1]), 0, Number(line[0]))
                break;

        }
    }
    console.log(arrayOfNumbers.join(" "));

}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

)