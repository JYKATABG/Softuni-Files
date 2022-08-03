function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/g
    let resultPrice = 0;

    for (let line of input) {

        if (line === "end of shift") {
            break;
        }

        let match = pattern.exec(input);

        if (match !== null) {

            let name = match.groups.name;
            let product = match.groups.product;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);

            let sum = count * price;
            resultPrice += sum

            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${resultPrice.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)