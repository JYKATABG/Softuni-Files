function test(input) {

    let password = input.shift();

    let line = input.shift()
    while (line !== 'Done') {
        let [command, ...tokens] = line.split(" ");
        switch (command) {
            case "TakeOdd":
                password = [...password]
                    .filter((symbol, index) => { return index % 2 !== 0 })
                    .join('');
                console.log(password);
                break;

            case "Cut":
                let index = Number(tokens[0])
                let length = Number(tokens[1])

                const switchSubString = password.substr(index, length)

                password = password.replace(switchSubString, '')
                console.log(password);
                break;

            case "Substitute":
                let substring = tokens[0];
                let substitute = tokens[1];
                if (password.includes(substring)) {
                    password = password.replace(new RegExp(substring, 'g'), substitute)
                    console.log(password);
                    break;
                }
                console.log('Nothing to replace!');
                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
test(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])



