function sumTable() {
    let allElements = document.querySelectorAll('table tr');

    let sum = 0;

    for (let i = 1; i < allElements.length - 1; i++) {
        let rows = allElements[i].children;
        sum += Number(rows[1].textContent)
    }
    document.getElementById('sum').innerText = sum
}