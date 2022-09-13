function wordsUppercase(input) {

    // return input.match(/\w+/g).join(", ").toUpperCase()

    let buff = "";
    let res = [];
    for (let i = 0; i < input.length; i++) {
        let chCode = input.charCodeAt(i)
        if (chCode >= 65 && chCode <= 90 || chCode >= 97 && chCode <= 122) {
            buff += input[i];
        } else {
            res.push(buff)
            buff = "";
        }
    }
    if (buff) {
        res.push(buff);
    }

    res = res.filter((word => word.trim().length > 0))
    console.log(res.join(", ").toUpperCase());
}
wordsUppercase('hello')
wordsUppercase('Hi, how are you?');