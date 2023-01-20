// function attachGradientEvents() {
//     let gradient = document.getElementById('gradient');

//     gradient.addEventListener('mousemove', function (event) {
//         let position = event.offsetX;
//         let gradientWidth = event.target.offsetWidth;

//         let result = Math.trunc(position / gradientWidth * 100);
//         document.getElementById('result').textContent = result + "%";
//     });
// }


//Option 2

function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove',overFunc);
    gradient.addEventListener('mouseout',outFunc);

    function overFunc(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    function outFunc(event) {
        document.getElementById('result').textContent = "";
    }
}