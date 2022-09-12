function matchPhoneNumber(data) {

    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g
    let phoneNumberList = pattern[0];
    let result = [];

    let match = pattern.exec(data)

    while (match !== null) {
        result.push(match[0])

        match = pattern.exec(data)
    }
    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])