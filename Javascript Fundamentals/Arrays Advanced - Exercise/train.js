function train(array) {

    let passengersInTrainArr = array.shift().split(" ").map(Number)
    let maxCapacity = +array.shift();


    for (let i = 0; i < array.length; i++) {

        let commandNum = array[i].split(" ")

        if (commandNum[0] === "Add") {
            passengersInTrainArr.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersInTrainArr.length; a++) {
                if (Number(commandNum[0]) + passengersInTrainArr[a] <= maxCapacity) {
                    passengersInTrainArr[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }

    console.log(passengersInTrainArr);

}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)