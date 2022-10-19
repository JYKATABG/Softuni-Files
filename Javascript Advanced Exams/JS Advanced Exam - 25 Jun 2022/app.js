window.addEventListener("load", solve);

function solve() {

  let input = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    productionYear: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price")
  }

  document.getElementById("publish").addEventListener("click", publish);
  let totalProfit = 0;
  let price = 0;

  function publish(event) {
    event.preventDefault();
    //read the input fields
    let make = input.make.value;
    let model = input.model.value;
    let productionYear = input.productionYear.value;
    let fuel = input.fuel.value;
    let originalCost = input.originalCost.value;
    let sellingPrice = input.sellingPrice.value;
    //validate input
    if (make == "" || model == "" || productionYear == "" || fuel == "" || originalCost == "" || sellingPrice == "") {
      return
    }

    if (Number(originalCost) > Number(sellingPrice)) {
      return
    }

    //make the html structure
    let tbody = document.getElementById("table-body");
    let tr = document.createElement("tr");
    tr.classList = "row";
    let tdMake = document.createElement('td');
    tdMake.textContent = `${make}`;
    tr.appendChild(tdMake)

    let tdModel = document.createElement('td');
    tdModel.textContent = `${model}`;
    tr.appendChild(tdModel);

    let tdProductionYear = document.createElement('td');
    tdProductionYear.textContent = `${productionYear}`;
    tr.appendChild(tdProductionYear);

    let tdFuel = document.createElement('td');
    tdFuel.textContent = `${fuel}`;
    tr.appendChild(tdFuel);

    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = `${originalCost}`;
    tr.appendChild(tdOriginalCost);

    let tdSellPrice = document.createElement('td');
    tdSellPrice.textContent = `${sellingPrice}`;
    tr.appendChild(tdSellPrice);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);
    tr.appendChild(editBtn);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sell);
    tr.appendChild(sellBtn);
    //add the tbody to table-body
    tbody.appendChild(tr);
    //clear all input fields
    input.make.value = "";
    input.model.value = "";
    input.productionYear.value = "";
    input.fuel.value = "";
    input.originalCost.value = "";
    input.sellingPrice.value = "";

    //Edit button 
    function edit(event) {
      let currentInfo = event.target.parentElement;

      input.make.value = make;
      input.model.value = model;
      input.productionYear.value = productionYear;
      input.fuel.value = fuel;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;

      currentInfo.remove();
    }

    function sell(event) {
      let profitElement = document.getElementById("profit");
      let currentInfo = event.target.parentElement

      price = Number(sellingPrice) - Number(originalCost);

      currentInfo.remove();

      let ul = document.getElementById("cars-list")

      let li = document.createElement("li");
      li.classList.add("each-list");
      ul.appendChild(li);

      let spanModel = document.createElement("span")
      spanModel.textContent = `${make} ${model}`
      li.appendChild(spanModel);

      let spanYear = document.createElement("span")
      spanYear.textContent = `${productionYear}`
      li.appendChild(spanYear);

      let spanPrice = document.createElement("span");
      spanPrice.textContent = `${price}`
      li.appendChild(spanPrice);


      currentInfo.remove();

      totalProfit += Number(price)
      profitElement.textContent = totalProfit.toFixed(2);

    }
  }
}
