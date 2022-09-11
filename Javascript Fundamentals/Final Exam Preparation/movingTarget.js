function movingTarget(input) {

    let targetsArray = input.shift().split(" ").map(Number);

    for (let line of input) {

        let index;

        let [command, ...tokens] = line.split(" ");

        if (command === "End") {
            console.log(targetsArray.join("|"));
        }

        switch (command) {
            case "Shoot":
                index = Number(tokens[0]);
                let power = Number(tokens[1]);

                if (index >= 0 && index < targetsArray.length) {
                    targetsArray[index] -= power

                    if (targetsArray[index] <= 0) {
                        targetsArray.splice(index, 1)
                    }
                }
                break;
            case "Strike":
                index = Number(tokens[0]);
                let radius = Number(tokens[1]);

                if (index >= 0 && index < targetsArray.length) {
                    if (index - radius >= 0 && index + radius < targetsArray.length) {
                        targetsArray.splice(index - radius, radius + radius + 1);
                    } else {
                        console.log("Strike missed!");
                    }
                }
                break;
            case "Add":
                index = Number(tokens[0]);
                let value = Number(tokens[1]);

                if (index >= 0 && index < targetsArray.length) {
                    targetsArray.splice(index, 0, value);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
        }
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

    ;