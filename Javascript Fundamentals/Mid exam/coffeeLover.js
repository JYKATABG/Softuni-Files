function coffeeLover(input) {

    let coffeMenu = input.shift().split(" ");
    let numberOfCommand = +input.shift()
    let index;

    let resultArray = []

    for (let i = 0; i < numberOfCommand; i++) {

        let allCommand = input.shift().split(" ")
        let command = allCommand[0]

        switch (command) {
            case "Include":
            coffeMenu.push(allCommand[1])
            break;
            case "Remove":
                if(allCommand[1] === "first") {
                   coffeMenu.splice(0,allCommand[2])
                } else {
                    coffeMenu.splice(-allCommand[2])
                }
                break;
            case "Prefer":
                let tmpOne = Number(allCommand[1])
                let tmpTwo = Number(allCommand[2])
                if(coffeMenu.indexOf(tmpOne) && coffeMenu.indexOf(tmpTwo)) {    
                    
                    let tmp = coffeMenu[allCommand[1]]
                    coffeMenu[allCommand[1]] = coffeMenu[allCommand[2]]
                    coffeMenu[allCommand[2]] = tmp

                } else {
                    continue;
                }
                break;
            case "Reverse":
                coffeMenu.reverse();
                break;

        }
    }
    console.log(`Coffees:\n${coffeMenu.join(" ")}`);

}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])
