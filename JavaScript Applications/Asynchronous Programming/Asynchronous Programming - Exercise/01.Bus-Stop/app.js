// async function getInfo() {
//     const stopInfoElement = document.getElementById("stopId");
//     const stopId = stopInfoElement.value;
//     const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
//     const stopNameElement = document.getElementById("stopName");
//     const busList = document.getElementById("buses");

//     busList.innerHTML = "";
//     stopId.value = "";

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         stopNameElement.textContent = data.name;
//         Object.entries(data.buses).forEach(([busId, time]) => {
//             const li = document.createElement('li');
//             li.textContent = `Bus ${busId} arrives in ${time} minutes`;
//             busList.appendChild(li);
//         })
//     } catch(error) {
//         stopNameElement.textContent = "Error";
//     }
// }

function getInfo() {
    const busUrl = "http://localhost:3030/jsonstore/bus/businfo"
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesDiv = document.getElementById('buses');
    fetch(`${busUrl}/${stopId.value}`)
    .then(response => response.json())
    .then(data => {
        const name = data.name
        const buses = data.buses

        stopName.textContent = name;
        busesDiv.innerHTML = "";
        Object.keys(buses).forEach(bus => {
            let li = document.createElement("li");
            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`
            busesDiv.appendChild(li);
        });
    })
    .catch(error => {
        stopName.textContent = "Error"
        busesDiv.innerHTML = "";
    });
}