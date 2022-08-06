function fancyBarcodes(data) {

    let n = data.shift();
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g

    for (let i = 0; i < n; i++) {

        let barcodes = data[i]
        let match = pattern.exec(barcodes);

        let concatenateDigit = "";
        let isValid = false;

        while (match !== null) {
            isValid = true;
            let word = match[2]
            for (let el of word) {
                if (!isNaN(Number(el))) {
                    concatenateDigit += el
                }
            }
            match = pattern.exec(barcodes)
        }

        if (isValid) {
            concatenateDigit = concatenateDigit !== "" ? concatenateDigit : '00'
            console.log(`Product group: ${concatenateDigit}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))
console.log('-------------------------');
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
