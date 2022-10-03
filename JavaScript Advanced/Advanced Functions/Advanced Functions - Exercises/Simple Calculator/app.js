function calculator() {
    let selector1;
    let selecotor2;
    let resultSelector;

    let handler = {
        init: (firstSelector, secondSelector, resSelector) => {
            selector1 = document.querySelector(firstSelector);
            selecotor2 = document.querySelector(secondSelector);
            resultSelector = document.querySelector(resSelector);
        },

        add: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selecotor2.value)
            resultSelector.value = firstNum + secondNum
        },

        subtract: () => {
            let firstNum = Number(selector1.value);
            let secondNum = Number(selecotor2.value);
            resultSelector.value = firstNum - secondNum;
        }
    }
    return handler;
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
