function giftsFromSanta(input) {
    let N = Number(input[0])
    let M = Number(input[1])
    let S = Number(input[2])

    let buff = " ";
    let numbers = 0;


    for (let i = M; i >= N; i--) {

        if (i % 2 === 0 && i % 3 === 0) {
            i += ""
            if (i === S) {
                break;
            }

            
            
            console.log(i)
        }
    }
}
giftsFromSanta(["1",
"36",
"12"])





