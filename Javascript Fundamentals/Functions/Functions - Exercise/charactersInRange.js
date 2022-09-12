function charactersInRange(firstChar, secondChar) {

    let firstCharArray = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt())
    let secondCharArray = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt())

    let charArray = []

    for(let i = firstCharArray + 1;i < secondCharArray;i++) {
        let toChar = String.fromCharCode(i)
        charArray.push(toChar)
    }

    console.log(charArray.join(" "));
}
charactersInRange('#',
':'
)