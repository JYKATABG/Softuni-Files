function chatLogger(arr) {

    let index = 0
    let command = arr[index]
    index++;

    let resultArray = []


        while (command !== "end") {

            let currentCommand = command.split(" ")
            let commandMessage = currentCommand.shift()
    
            switch (commandMessage) {
                case "Chat":
                    resultArray.push(currentCommand[0])
                    break;
                case "Delete":
                    if (resultArray.includes(currentCommand[0])) {
                        let i = resultArray.indexOf(currentCommand[0])
                        resultArray.splice(i, 1)
                    } else {
                        command = arr[index]
                        index++;
                        continue;
                    }
                    break;
                case "Edit":
                    if (!resultArray.includes(currentCommand[0])) {
                        command = arr[index]
                        index++;
                        continue;
                    } else {
                        for (let el of resultArray) {
                            if (el === currentCommand[0]) {
                                let index = resultArray.indexOf(el)
                                resultArray.splice(index, 1)
                                resultArray.splice(index, 1, currentCommand[1])
                                break;
                            }
                        }
                    }
                    break;
                case "Pin":
                    if (resultArray.includes(currentCommand[0])) {
                        let ie = resultArray.indexOf(currentCommand[0])
                        resultArray.splice(ie,1)
                        resultArray.push(currentCommand[0])
                    } else {
                        command = arr[index]
                        index++;
                        continue;
                    }
                    break;
                case "Spam":
                    for (let el of currentCommand) {
                        resultArray.push(el)
                    }
                    break;
            }
    
            command = arr[index]
            index++;
        }
    console.log(resultArray.join("\n"));

}
chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"]);