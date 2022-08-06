function worldTour(data) {

    let initialString = data.shift();
    let line = data.shift();

    while(line !== 'Travel') {
        let [command,firstParam,secondParam] = line.split(':');
        let startIndex;
        let endIndex;
        switch(command) {
            case "Add Stop":
                startIndex = Number(firstParam)
                if(startIndex < 0 || startIndex >= initialString.length) {
                    console.log(initialString);
                    break;
                }
                let value = secondParam;
                let first = initialString.slice(0,startIndex);
                let second = initialString.slice(startIndex);
                initialString = first + value + second
                console.log(initialString);
                break;

            case "Remove Stop":
                
            startIndex = Number(firstParam);
            endIndex = Number(secondParam);

            if(!initialString[startIndex] || !initialString[endIndex]) {
                console.log(initialString);
                break;
            }
            let subStr = initialString.substring(startIndex,endIndex + 1)
            initialString = initialString.replace(subStr,"")
            console.log(initialString);
                break;

            case "Switch":
                
            let oldString = firstParam;
            let newString = secondParam;

            let pattern = new RegExp(oldString,'g')
            initialString = initialString.replace(oldString,newString)
            console.log(initialString);
                break;
        }

        line = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))