function easterBake(input) {

    let easterBread = Number(input[0])
    let index = 1;


    let sugarTank = 0;
    let sugarTest = 0;

    let flourTank = 0;
    let flourTest = 0;

    for(let i = 1; i <= easterBread;i++) {
        let sugar = Number(input[index])
        index++;

        sugarTank += sugar

        if(sugar > sugarTest) {
            sugarTest = sugar;
        }

        let flour = Number(input[index])
        index++;

        flourTank += flour

        if(flour > flourTest) {
            flourTest = flour;
        }

    }

    let totalSugarNeeded = Math.ceil(sugarTank / 950);
    let totalFlourNeeded = Math.ceil(flourTank / 750);

    console.log(`Sugar: ${totalSugarNeeded}`);
    console.log(`Flour: ${totalFlourNeeded}`);
    console.log(`Max used flour is ${flourTest} grams, max used sugar is ${sugarTest} grams.`);

}
easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

