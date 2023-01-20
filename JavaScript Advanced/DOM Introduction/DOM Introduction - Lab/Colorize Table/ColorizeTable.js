function colorize() {
    let allWords = document.querySelectorAll('table tr');

    for(let i = 1;i < allWords.length;i++) {
        if(i % 2 === 1) allWords[i].style.backgroundColor = 'Teal'
    }
}