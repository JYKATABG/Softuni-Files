function calculatorDeposit(input) {
    let deposit = Number(input[0])
    let date = Number(input[1])
    let percent = Number(input[2])
    let sum = deposit + date * ((deposit * percent / 100)/12)
    console.log(sum)
    
}

calculatorDeposit([200, 3, 5.7])