function oscarsCeremony(input) {
    let hallRent = Number(input[0])

    let statuettePrice = hallRent * 0.70
    let ceteringPrice = statuettePrice * 0.85
    let soundSystem = ceteringPrice / 2 

    let totalSum = hallRent + statuettePrice + ceteringPrice + soundSystem
    console.log(totalSum.toFixed(2));
}

oscarsCeremony(["5555"])