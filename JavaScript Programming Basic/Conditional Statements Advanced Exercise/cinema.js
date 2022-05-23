function cinema(input) {
    let projection = input[0]
    let row = Number(input[1])
    let column = Number(input[2])

    let income = 0;

    if (projection === "Premiere") {
        income = row * column * 12.00;
        
    } else if (projection === "Normal") {
        income = row * column * 7.50;
        
    } else if (projection === "Discount") {
        income = row * column * 5.00;
       
    }
    console.log(`${income.toFixed(2)} leva.`);
}

cinema(["Discount",
"12",
"30"])


