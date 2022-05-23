function trainTheTrainers(input) {

    let n = Number(input[0])
    let index = 1;
    let command = input[index]
    let sumGrade = 0;
    let counter = 0;

    while(command !== "Finish") {
        counter++;

        let name = command;
        let tempGradeCount = 0;

        for(let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index])
            tempGradeCount += grade;
        }
        let tempAvgGrade = tempGradeCount / n;
        sumGrade += tempAvgGrade;

        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        index++;
        command = input[index]

    }

    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

