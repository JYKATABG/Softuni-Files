function stringSubstring(chosenWord, sentence) {

    let text = sentence.split(' ');

    for(let word of text) {
        if(word.toLowerCase() === chosenWord.toLowerCase()) {
            console.log(chosenWord);
            return
        }
    }
    console.log(`${chosenWord} not found!`);

}
stringSubstring('python',
'JavaScript is the best programming language')