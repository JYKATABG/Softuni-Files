function changeDesk(input) {
    let bitcoinAmount = Number(input[0])
    let chineseCoinAmount = Number(input[1])
    let commission = Number(input[2])

    let bitcoin = bitcoinAmount * 1168;
    let chineseCoin = 0.15;
    let dollar = 1.76;
    let euro = 1.95;

    let dollarSum = chineseCoin * chineseCoinAmount
    let bgSum = dollarSum * dollar;
    let changeSum = bitcoin + bgSum;
    let euroSum = changeSum / euro;

    let commissionSum = euroSum * commission / 100;
    let totalSum = euroSum - commissionSum
    console.log(totalSum.toFixed(2));


}

changeDesk(["7",
"50200.12",
"3"])




