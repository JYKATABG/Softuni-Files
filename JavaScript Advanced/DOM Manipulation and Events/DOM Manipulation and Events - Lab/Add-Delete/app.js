function addItem() {
    let inputItemText = document.getElementById('newItemText');
    let allWords = document.getElementById('items');

    let li = document.createElement('li');
    li.innerText = inputItemText.value;
    allWords.appendChild(li);

    let a = document.createElement('a');
    a.textContent = "[Delete]"
    a.href = "#";
    a.addEventListener('click', function () {
        allWords.removeChild(li);
    })
    li.appendChild(a);
}