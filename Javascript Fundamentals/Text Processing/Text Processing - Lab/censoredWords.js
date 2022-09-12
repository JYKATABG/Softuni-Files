function censoredWords(sentence, chosenWord) {

    let text = sentence.split(' ');
    
    for(let word of text) {
        if(word === chosenWord) {
            sentence = sentence.replace(word, '*'.repeat(word.length))
        }
    }
    console.log(sentence);
}
censoredWords('Find the hidden word', 'hidden')