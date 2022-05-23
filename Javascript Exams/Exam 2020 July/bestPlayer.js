function bestPlayer(input) {

    let index = 0;
    let command = input[index]
    index++;
    let allGoals = 0;
    let player = ""
    let enteredGoals = 0;

    while(command !== "END") {
        let goals = Number(input[index])
        index++;


        
        if(goals > enteredGoals) {
            enteredGoals = goals;
            player = command
        } 

        if(enteredGoals >= 10) {
            break;
        }
        
        command = input[index]
        index++;
    }
    console.log(`${player} is the best player!`);

    if(enteredGoals >= 3) {
        console.log(`He has scored ${enteredGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${enteredGoals} goals.`);
    }
}
bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])






