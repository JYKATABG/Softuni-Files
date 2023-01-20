function extractText() {
    let items = document.querySelectorAll('ul li');

    let result = document.getElementById('result');

    for(let el of items) {
        result.value += el.textContent;
    }  
}