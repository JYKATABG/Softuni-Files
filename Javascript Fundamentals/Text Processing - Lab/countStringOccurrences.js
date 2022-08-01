function countStringOccurrences(sentence, word) {

    let text = sentence.split(' ');
    let count = text.filter(x => x === word).length

    console.log(count);

}
countStringOccurrences('This is a word and it also is a sentence',
'is');