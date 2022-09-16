function printAnArrayWithAGivenDelimiter(input, string) {

    let stringArray = input.join(string);
    console.log(stringArray);
}
printAnArrayWithAGivenDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_')