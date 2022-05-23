function shoping(input) {
    let budget = Number(input[0])
    let gpus = Number(input[1])
    let cpus = Number(input[2])
    let ram = Number(input[3])


    let gpuSum = gpus * 250;
    let cpuPrice = (gpuSum * 0.35) * cpus;
    let ramPrice = gpuSum * 0.1 * ram;

    let totalSum = gpuSum + cpuPrice + ramPrice;

    if (gpus > cpus) {
        totalSum = totalSum * 0.85;
    }


    if (totalSum <= budget) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }

}

shoping(["900",
    "2",
    "1",
    "3"])


