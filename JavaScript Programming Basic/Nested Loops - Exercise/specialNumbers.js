function specialNumbers(input) {
     let n = Number(input[0])
     let result = ""

     for(let x = 1; x <= 9; x++) {
        for(let y = 1; y <= 9; y++) {
            for(let z = 1; z <= 9; z++) {
                for(let c = 1; c <= 9; c++) {
                    if(n % x === 0 && n % y === 0 && n % z === 0 && n % c === 0) {
                        result += `${x}${y}${z}${c} `
                    }
                }
            }
        }
     }
     console.log(result);
}
specialNumbers(["3"])