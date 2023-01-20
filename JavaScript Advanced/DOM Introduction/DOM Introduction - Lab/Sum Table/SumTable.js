function sumTable() {
    let allElements = document.querySelectorAll('table tr');
    let result = 0;

    for(let i = 1;i < allElements.length - 1;i++) {
        let childrens = allElements[i].children[1].textContent;
        result += Number(childrens)
    }
    document.getElementById('sum').innerText = result
}