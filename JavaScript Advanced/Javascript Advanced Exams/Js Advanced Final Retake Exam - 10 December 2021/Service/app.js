window.addEventListener('load', solve);

function solve() {
    let input = {
        name: document.getElementById("client-name"),
        phone: document.getElementById("client-phone"),
        description: document.getElementById("description")
    }

    let list = {
        received: document.getElementById("received-orders"),
        completed: document.getElementById("completed-orders")
    }

    document.querySelector("button").addEventListener("click", send);
    document.getElementsByClassName("clear-btn")[0].addEventListener("click", clear);
    function send(event) {
        event.preventDefault();
        //read input filds
        let name = input.name.value;
        let phone = input.phone.value;
        let description = input.description.value;
        //validate input
        if (name === "" || phone === "" || description === "") {
            return;
        }
        //check which drop down menu is selected
        let productTypeClass = document.querySelector("#type-product")
        let productType = productTypeClass.value;
        //create div with parameters
        let div = document.createElement("div");
        div.className = "container";
        div.innerHTML =
            `<h2>Product type for repair: ${productType}</h2>
        <h3>Client information: ${name}, ${phone}</h3>
        <h4>Description of the problem: ${description}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>`
        //move to first list 
        list.received.appendChild(div)
        //create buttons and add functionality
        let startBtn = div.querySelector(".start-btn");
        let finishBtn = div.querySelector(".finish-btn");
        startBtn.addEventListener("click", startRepair)
        finishBtn.addEventListener("click", finishRepair)
        //clear the input fields
        input.name.value = ""
        input.phone.value = ""
        input.description.value = ""

        function startRepair() {
            startBtn.disabled = true;
            finishBtn.disabled = false;

        }

        function finishRepair() {
            div.remove();
            startBtn.remove();
            finishBtn.remove();
            list.completed.appendChild(div);

        }
    }

    function clear(event) {
        let removeElement = Array.from(event.currentTarget.parentNode.querySelectorAll(".container"))

        for (let container of removeElement) {
            container.remove();
        }
    }
}