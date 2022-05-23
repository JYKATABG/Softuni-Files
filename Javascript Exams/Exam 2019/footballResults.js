function footballResults(input) {
    
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let matchWin = 0;
    let matchLose = 0;
    let matchDrawn = 0;

    let teamA = Number(firstMatch[0])
    let teamB = Number(firstMatch[2])
    if(teamA > teamB) {
        matchWin++;
    } else if(teamA < teamB) {
        matchLose++;
    } else {
        matchDrawn++
    }

    teamA = Number(secondMatch[0])
    teamB = Number(secondMatch[2])
    if(teamA > teamB) {
        matchWin++;
    } else if(teamA < teamB) {
        matchLose++;
    } else {
        matchDrawn++
    }

    teamA = Number(thirdMatch[0])
    teamB = Number(thirdMatch[2])
    if(teamA > teamB) {
        matchWin++;
    } else if(teamA < teamB) {
        matchLose++;
    } else {
        matchDrawn++
    }

    console.log(`Team won ${matchWin} games.`);
    console.log(`Team lost ${matchLose} games.`);
    console.log(`Drawn games: ${matchDrawn}`);
    
}
footballResults(["4:2",
"0:3",
"1:0"])

