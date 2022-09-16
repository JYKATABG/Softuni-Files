function listOfNames(input) {

    // let sortedArray = input.sort((a, b) => a.localeCompare(b));

    // for (let i = 0; i < input.length; i++) {
    //     console.log(`${i + 1}.${sortedArray[i]}`);
    // }

    input.sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => console.log(`${i + 1}.${x}`))
}
listOfNames(["John", "Bob", "Christina", "Ema"])