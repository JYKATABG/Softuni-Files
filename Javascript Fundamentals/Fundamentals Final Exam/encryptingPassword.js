function encryptingPassword(input) {

    let n = Number(input.shift());
    let pattern = /(.+)>(?<num>[0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|(?<symbols>[^<>]{3})<\1/
    let password;

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i])

        if (!match) {
            console.log(`Try another password!`);
            continue;
        }
        //2,3,4,5
        first = match[2];
        second = match[3];
        third = match[4];
        fourth = match[5];
        password = first + second + third + fourth;
        console.log(`Password: ${password}`);
        match = pattern.exec(input);
    }
}
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])

