window.addEventListener('load', solve);

function solve() {
    let input = {
        model: document.getElementById("model"),
        year: document.getElementById("year"),
        description: document.getElementById("description"),
        price: document.getElementById("price")
    }

    document.getElementById("add").addEventListener("click", add)

    let resultPrice = 0;

    function add(e) {
        e.preventDefault()
        let tbody = document.getElementById("furniture-list");
        //read input fields
        let model = input.model.value;
        let year = input.year.value;
        let description = input.description.value;
        let price = input.price.value;
        //validate input

        if (model == "" || year == "" || description == "" || price == "") {
            return
        }

        if (Number(year) < 0 || Number(price) < 0) {
            return
        }
        //make tr with td and 2 buttons and add functionality to them
        //add them to furniture list 
        let trOne = document.createElement("tr")
        trOne.classList.add("info");
        tbody.appendChild(trOne);

        let tdModel = document.createElement("td");
        tdModel.textContent = `${model}`;
        trOne.appendChild(tdModel);

        let tdPrice = document.createElement("td");
        tdPrice.textContent = `${Number(price).toFixed(2)}`;
        trOne.appendChild(tdPrice);

        let tdButtons = document.createElement("td");
        trOne.appendChild(tdButtons);

        let moreBtn = document.createElement("button");
        moreBtn.classList.add("moreBtn");
        moreBtn.textContent = "More Info";
        moreBtn.addEventListener("click", more);
        tdButtons.appendChild(moreBtn);

        let buyBtn = document.createElement("button");
        buyBtn.classList.add("buyBtn");
        buyBtn.textContent = "Buy it";
        buyBtn.addEventListener("click", buy);
        tdButtons.appendChild(buyBtn)

        //make second tr with class "hide" and td
        //add them to furniture list 

        let trTwo = document.createElement("tr");
        trTwo.classList.add("hide");
        tbody.appendChild(trTwo);

        let tdYear = document.createElement("td");
        tdYear.textContent = `Year: ${year}`;
        trTwo.appendChild(tdYear);

        let tdDescription = document.createElement("td");
        tdDescription.colSpan = "3";
        tdDescription.textContent = `Description: ${description}`;
        trTwo.appendChild(tdDescription);

        //clear input fields
        input.model.value = ""
        input.year.value = "";
        input.description.value = "";
        input.price.value = "";


        function more(e) {
            e.preventDefault()
            let btn = e.target
            if (btn.textContent === "More Info") {
                btn.textContent = "Less Info"
                trTwo.style.display = "contents"
            } else if (btn.textContent === "Less Info") {
                btn.textContent = "More Info";
                trTwo.style.display = "none"
            }
        }

        function buy(e) {
            e.preventDefault()
            trOne.remove();
            trTwo.remove();

            let totalPrice = document.querySelector(".total-price")
            totalPrice.textContent = (Number(price) + Number(totalPrice.textContent)).toFixed(2);
        }
    }
}
