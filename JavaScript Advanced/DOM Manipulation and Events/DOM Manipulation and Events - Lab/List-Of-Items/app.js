function addItem() {
    let allItems = document.getElementById("items");
    let newItemText = document.getElementById("newItemText").value
    let li = document.createElement('li');
    li.textContent = newItemText;
    allItems.appendChild(li);
}