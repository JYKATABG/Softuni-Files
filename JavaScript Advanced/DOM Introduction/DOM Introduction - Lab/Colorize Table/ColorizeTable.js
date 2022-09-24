function colorize() {
    let allElements = document.querySelectorAll('table tr');

    for (let i = 0; i < allElements.length; i++) {
        if (i % 2 === 1) {
            allElements[i].style.backgroundColor = "teal";
        }
    }
}