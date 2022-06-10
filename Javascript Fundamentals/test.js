function test(firstChar,secondChar) {

    
    let startChar = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt())
    let finalChar = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt())

    let newArray = []

    for(let i = startChar + 1;i < finalChar;i++) {
        let toString = String.fromCharCode(i)
        newArray.push(toString)
    }

    console.log(newArray.join(" "));

}
test('#',
':'
)
