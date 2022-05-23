function trekkingMania(input) {
    let index = 0;
    let climbersNumber = Number(input[index])
    index++;

    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;


    for(let i = 0;i < climbersNumber;i++) {
        let climbers = Number(input[index])
        index++;

        if(climbers <= 5) {
            musalaClimbers += climbers
        } else if(climbers >= 6 && climbers <= 12) {
            monblanClimbers += climbers
        } else if(climbers >= 13 && climbers <= 25) {
            kilimandjaroClimbers += climbers
        } else if(climbers >= 26 && climbers <= 40) {
            k2Climbers += climbers
        } else {
            everestClimbers += climbers
        }

    }
    let totalClimbers = musalaClimbers + monblanClimbers + kilimandjaroClimbers + k2Climbers + everestClimbers

    console.log(`${((musalaClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((monblanClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaroClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2Climbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everestClimbers / totalClimbers) * 100).toFixed(2)}%`);
    
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

