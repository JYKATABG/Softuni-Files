function theImitationGame(input) {

    let encryptedMessage = input.shift();

    for (let line of input) {
        let [command, ...tokens] = line.split('|');

        if (command === "Decode") {
            break;
        }

        switch (command) {
            case "ChangeAll":
                let defaultLetter = tokens[0];
                let newLetter = tokens[1];
                while(encryptedMessage.includes(defaultLetter)) {
                    encryptedMessage = encryptedMessage.replace(defaultLetter,newLetter);
                }
                break;

            case "Insert":
                let index = Number(tokens[0]);
                let value = tokens[1];

                let firstSlice = encryptedMessage.substring(0, index);
                let secondSlice = encryptedMessage.substring(index);
                encryptedMessage = firstSlice + value + secondSlice;
                break;

            case "Move":
                let numberOfLetters = Number(tokens[0]);
                let sliceOne = encryptedMessage.substring(0, numberOfLetters);
                let sliceTwo = encryptedMessage.substring(numberOfLetters);
                encryptedMessage = sliceTwo + sliceOne;
                break;
        }
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);