function addItem() {
    let allItems = document.getElementById('items');
    let newItemText = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    li.innerText = newItemText;

    allItems.appendChild(li);
}