function trekkingMania(input) {
    let groupNumber = Number(input[0])
    let peopleInGroupNumber = Number(input[1])
    let totalclimbers = 0;

    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let sum = 0;


    for(let index = 1; index < groupNumber;index++) {
        let climbers = Number(input[index++])
        totalclimbers += climbers
        if(climbers <= 5) {
            Musala+= climbers;
        } else if (climbers => 6 && climbers <= 12) {
            Monblan+= climbers;
        } else if(climbers >= 13 && climbers <= 25) {
            Kilimandjaro+= climbers;
        } else if(climbers >= 26 && climbers <= 40) {
            K2+= climbers;
        } else if(climbers >= 41) {
            Everest+= climbers;
        }
        let totalClimberss = (Musala + Monblan + Kilimandjaro + K2 + Everest) + climbers;
        console.log(totalClimberss);
        
    }
    //console.log(`${(Musala / peopleInGroupNumber)* 100}%`);
        //console.log(`${(Monblan / totalclimbers)* 100}%`);
        //console.log(`${(Kilimandjaro / totalclimbers)* 100}%`);
        //console.log(`${(K2 / totalclimbers)* 100}%`);
        //console.log(`${(Everest / totalclimbers)* 100}%`);
        

    

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
