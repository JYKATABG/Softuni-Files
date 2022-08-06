function passwordReset(input) {

    let password = input.shift();

    let commandParser = {
        'TakeOdd': (password) => {
            return [...password]
                .filter((symbol, index) => { return index % 2 !== 0 })
                .join('');
        },
        'Cut': (password, index, length) => {

            index = Number(index);
            length = Number(length);

            const substring = password.substr(index, length);//substr === slice

            return password.replace(substring, '')
        },
        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log('Nothing to replace!');
            return password;
        }
    };

    input.forEach(line => {

        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password, ...tokens);

            if (oldPassword !== password) {
                console.log(password);
            }
        }
    });

    console.log(`Your password is: ${password}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);