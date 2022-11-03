function solve() {

    const info = document.getElementById('info');
    const departButton = document.getElementById('depart')
    const arriveButton = document.getElementById('arrive');

    let busStop = {
        next: 'depot'
    }

    function depart() {
        departButton.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            busStop = JSON.parse(JSON.stringify(data))
            info.textContent = `Next stop ${busStop.name}`
        })
        .catch(error => {throw new Error(`${error}`)
        });
        arriveButton.disabled = false;
    }

    function arrive() {
        info.textContent = `Arraving at ${busStop.name}`
       arriveButton.disabled = true;
       departButton.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();