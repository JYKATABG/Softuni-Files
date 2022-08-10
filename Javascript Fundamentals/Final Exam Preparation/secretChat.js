function secretChat(input) {

    let conceledMessage = input.shift();
    let flag = true;

    for (let line of input) {
        let [command, ...tokens] = line.split(':|:')
        let index;

        if (command === 'Reveal') {
            break;
        }

        switch (command) {
            case "InsertSpace":
                index = Number(tokens[0])
                let space = " ";
                let first = conceledMessage.slice(0, index);
                let second = conceledMessage.slice(index);
                conceledMessage = first + space + second;
                console.log(conceledMessage);
                break;

            case "Reverse":
                let substring = tokens[0];
                if (conceledMessage.includes(substring)) {
                    let splitString = substring.split("");
                    let reversedString = splitString.reverse().join("");
                    conceledMessage = conceledMessage.replace(substring, "") + reversedString;
                    console.log(conceledMessage);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                let subString = tokens[0]
                let replacment = tokens[1]
                conceledMessage = conceledMessage.replace(new RegExp(subString, 'g'), replacment);
                console.log(conceledMessage);
                break;
        }
    }
    console.log(`You have a new text message: ${conceledMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reverse:|:hello',
    'Reveal',
]);