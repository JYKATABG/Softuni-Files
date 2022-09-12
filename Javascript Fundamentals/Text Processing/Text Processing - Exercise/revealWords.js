function revealWords(word, sentence) {
    
    let words = word.split(', ');
    let text = sentence.split(' ');

    for(let el of words) {
        for(let word of text) {
            if(word.includes('*') && el.length === word.length) {
                sentence = sentence.replace(word, el);
                break;
            }
        }
    }
    console.log(sentence);

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');