function extractText() {
    let lists = document.getElementsByTagName('ul')[0]

    let result = document.getElementById('result')

    for (let list of lists.children) {
        result.value += list.textContent + '\n';
    }
}