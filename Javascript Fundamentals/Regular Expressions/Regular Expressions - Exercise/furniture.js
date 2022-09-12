function furniture(input) {

    let text = input.join(' ');
    let pattern = /[>]{2}(?<furniture>[A-Z]+[A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g

    let totalPrice = 0;
    let resultArr = [];
    let valid;

    while ((valid = pattern.exec(text)) !== null) {

        let validName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);

        resultArr.push(validName);

        totalPrice += validPrice * validQuantity;
    }

    console.log("Bought furniture:");

    resultArr.forEach(el => console.log(el));

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])