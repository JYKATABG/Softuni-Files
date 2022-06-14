function test(input) {

   
    let step = input.pop();
    let result = []

    for(let el in input) {
        if(el % step === 0) {
            result.push(input[el])
        }
    }
    console.log(result.join(" "));

}
test(['1', '2', '3', '4', '5', '6']);
