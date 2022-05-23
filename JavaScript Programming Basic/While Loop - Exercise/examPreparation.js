function examPreparation(input) {
    let index = 1;
    let badGrades = Number(input[0]);

    let exerciseName = input[index]
    index++;
    let grade = Number(input[index])
    index++;

    let counterForGrades = 0;
    let totalBadGrades = 0;
    let sumOfGrades = 0;
    let finalExercise = "";

    while (totalBadGrades < badGrades) {

        if (exerciseName === "Enough") {
            console.log(`Average score: ${(sumOfGrades / counterForGrades).toFixed(2)}`);
            console.log(`Number of problems: ${counterForGrades}`);
            console.log(`Last problem: ${finalExercise}`);
            break;
        }



        if (grade <= 4) {
            totalBadGrades++;
        }

        if (totalBadGrades == badGrades) {
            console.log(`You need a break, ${totalBadGrades} poor grades.`);
            break;
        }

        counterForGrades++;
        finalExercise = exerciseName
        sumOfGrades += grade
        exerciseName = input[index++]
        grade = Number(input[index++])
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


