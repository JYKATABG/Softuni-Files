function passwordValidator(input) {

    let password = input.shift();

    function replaceAt(password, index, char) {
        return this.slice(0, index) + char + this.slice(index + char.length);
    }

    for (let line of input) {
        let [command, ...tokens] = line.split(' ');
        let char;

        if (command === 'Complete') {
            break;
        }

        switch (command) {
            case "Replace":
                char = tokens[0]
                let value = Number(tokens[1])
                let sum = 0;
                if (password.includes(char)) {
                    let asciiValue = char.charCodeAt()
                    sum += asciiValue + value
                    let newChar = String.fromCharCode(sum);
                    for (let el of password) {
                        if (char === el) {
                            password = password.replace(el, newChar)
                        }
                    }
                    console.log(password);
                }

                break;

            case "Make":
                secondCommand = tokens[0]
                index = Number(tokens[1])
                if (secondCommand === 'Upper') {

                    word = password.charAt(index)
                    word = word.toUpperCase();
                    for (let i = 0; i < password.length; i++) {
                        if (i === index) {
                            password = password.replace(password[i], word)
                            console.log(password);
                            break;
                        }
                    }


                } else if (secondCommand === 'Lower') {
                    secondCommand = tokens[0]
                    index = Number(tokens[1])


                    word = password.charAt(index)
                    word = word.toLowerCase();
                    for (let i = 0; i < password.length; i++) {
                        if (i === index) {
                            password = password.replace(password[i], word)
                            console.log(password);
                            break;
                        }
                    }
                }

                break;


            case "Insert":
                index = Number(tokens[0])
                char = tokens[1]
                if (index < 0 || index >= password.length) {
                    break;
                }
                let first = password.slice(0, index)
                let second = password.slice(index)
                password = first + char + second
                console.log(password);
                break;

            case "Validation":

            let symbols = /\W/g
            let upperLetter = /[A-Z]/g
            let lowerLetter = /[a-z]/g
            let digit = /\d/g

            let matchSymbols = password.match(symbols);
            let matchUpperLetter = password.match(upperLetter);
            let matchLowerLetter = password.match(lowerLetter);
            let matchDigit = password.match(digit);
                if (password.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                    continue;
                }

                if(matchSymbols) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }

                if(!matchUpperLetter) {
                    console.log('Password must consist at least one uppercase letter!');
                }

                if(!matchLowerLetter) {
                    console.log('Password must consist at least one lowercase letter!');
                }

                if(!matchDigit) {
                    console.log('Password must consist at least one digit!');
                }
                
        }
    }
}
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete']);