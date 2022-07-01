function treasureHunt(data) {

    let initialLoot = data.shift().split("|")

    let index = 0;
    let command = data[index]
    index++;
    let i;
    let sum = 0;

    while (command !== "Yohoho!") {

        let tokens = command.split(" ");
        let operation = tokens.shift()

        switch (operation) {
            case "Loot":
                for (let el of tokens) {
                    if (!initialLoot.includes(el)) {
                        initialLoot.unshift(el)
                    }
                }
                break;
            case "Drop":
                i = Number(tokens[0])
                if (i < 0 || i > initialLoot.length) {
                    command = data[index]
                    index++;
                    continue;
                }
                let element = initialLoot.splice(i, 1)
                initialLoot.push(element[0])
                break;
            case "Steal":
                i = Number(tokens[0])
                let stealedItems = initialLoot.splice(-i)
                console.log(stealedItems.join(", "));
                break;
        }

        command = data[index]
        index++;
    }

    for (let el of initialLoot) {
        sum += el.length

    }


    let averageTreasureGain = sum / initialLoot.length;

    if (initialLoot.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }


}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])


