function modernTimesOfHashTag(input) {

    let text = input.split(' ');

    for(let word of text) {
        if(word.startsWith('#') && word.length > 1) {
            let flag = true;
            let loweredWord = word.toLowerCase();
            for(let i = 1;i < word.length;i++) {
                if(loweredWord.charCodeAt(i) < 97 || loweredWord.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                console.log(word.slice(1));
            }
        }
    }
        

}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')