function shootForTheWin(input) {

    let targetsArray = input.shift().split(' ').map(Number);
    let shotTargets = 0;

    for(let el of input) {
        if(el === "End") {
            console.log(`Shot targets: ${shotTargets} -> ${targetsArray}`);
        }

        if(targetsArray.length > el) {
            let currentTarget = targetsArray[el];

            for(const i in targetsArray) {
                if(targetsArray[i] !== -1) {
                    if(targetsArray[i] > currentTarget) {
                        targetsArray[i] -= currentTarget;
                    } else {
                        targetsArray[i] += currentTarget;
                    }
                }
            }
            targetsArray[el] = -1
            shotTargets += 1
        }
    }

}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])