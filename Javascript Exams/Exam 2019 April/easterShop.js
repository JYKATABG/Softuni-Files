function easterShop(input) {

    let index = 0;
    let availableEggs = Number(input[index])
    index++;
    let command = input[index]
    index++;

    let eggs = 0;

    while (command !== "Close") {

        let buyedEggs = Number(input[index])
        index++;

        if (command === "Buy") {
            if (buyedEggs > availableEggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${availableEggs}.`);
                break;
            } else {
                availableEggs -= buyedEggs
                eggs += buyedEggs
            }
        } else if (command === "Fill") {
            availableEggs += buyedEggs;
        }
        

        command = input[index]
        index++;
    }
    if (command === "Close") {
        console.log(`Store is closed!`);
        console.log(`${eggs} eggs sold.`);
    }
}
easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])





