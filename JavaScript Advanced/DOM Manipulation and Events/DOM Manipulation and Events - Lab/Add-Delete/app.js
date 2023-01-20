function addItem() {
    let items = document.getElementById("items");
    let newItemText = document.getElementById("newItemText").value;
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.textContent = newItemText;
    a.textContent = "[Delete]"
    a.href = "#";
    a.addEventListener("click",hideRow)
    li.appendChild(a);
    items.appendChild(li);

    function hideRow(event) {
        event.target.parentElement.remove();
    }
}