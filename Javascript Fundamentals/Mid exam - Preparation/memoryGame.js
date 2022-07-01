function memoryGame(input) {

    let board = input.shift().split(" ");
    let command = input.shift();
    let count = 1;

    while(command !== "end" && board.length > 0) {

        let [first,second] = command.split(" ").map(Number);

        let isInvalidInput = (first < 0 || first >= board.length) || (second < 0 || second >= board.length) || first === second
        if(isInvalidInput) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let numberOfMoves = `-${count}a`
            let middleIndex = Math.floor(board.length / 2)
            board.splice(middleIndex,0,numberOfMoves,numberOfMoves)
        } else {
            if(board[first] === board[second]) {
                console.log(`Congrats! You have found matching elements - ${board[first]}!`);
                board = board.filter(x => x !== board[first])
            } else {
                console.log("Try again!");
            }
        }

        if(board.length === 0) {
            console.log(`You have won in ${count} turns!`);
        }

        command = input.shift();
        count++;
    }

    if(board.length > 0) {
        console.log(`Sorry you lose :(\n${board.join(" ")}`);
    }

}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);