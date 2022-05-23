function easterEggsBattle(input) {
    let index = 0;
    let firstPlayer = Number(input[index])
    index++;
    let secondPlayer = Number(input[index])
    index++;
    let command = input[index]
    index++;

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while(command !== "End") {
        

        if(command === "one") {
            secondPlayer -= 1;
            secondPlayerPoints = secondPlayer;
        } else if(command === "two") {
            firstPlayer -= 1;
            firstPlayerPoints = firstPlayer;
        }

        if(secondPlayer === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerPoints} eggs left.`);
            break;
        } else if(firstPlayer === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerPoints} eggs left.`);
            break;
        }

        command = input[index]
        index++;
    }
    if(command === "End") {
        console.log(`Player one has ${firstPlayerPoints} eggs left.`);
        console.log(`Player two has ${secondPlayerPoints} eggs left.`);
    }
}
easterEggsBattle(["6","3","one","two","two","one","one"])