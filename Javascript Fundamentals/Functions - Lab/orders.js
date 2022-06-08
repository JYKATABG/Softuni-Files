function orders(product,number) {

    let sum;

    switch(product) {
        case "coffee":
            sum = number * 1.50;
            break;
        case "coke":
            sum = number * 1.40;
            break;
        case "water":
            sum = number * 1.00;
            break;
        case "snacks":
            sum = number * 2.00;
            break;
    }

    console.log(sum.toFixed(2));
}
orders("coffee", 2)