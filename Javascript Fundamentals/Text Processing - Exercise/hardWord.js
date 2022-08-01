function hardWord(input) {

    let text = input[0]
    let missingWords = input[1]
    let underScores = []

    for(let el of missingWords) {
        let underscore = '_';
        underscore = underscore.repeat(el.length)
        underScores.push(underscore);
    }
    
    missingWords.sort((a,b) => b.length - a.length)
    underScores.sort((a,b) => b.length - a.length);

    for(let i = 0;i < missingWords.length;i++) {
        text = text.replace(underScores[i],missingWords[i])
    }

    console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])