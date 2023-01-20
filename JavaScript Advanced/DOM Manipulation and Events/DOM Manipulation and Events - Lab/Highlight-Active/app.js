function focused() {
    let inputs = document.querySelectorAll('input');

    for(let input of inputs) {
        input.addEventListener('focus',focusedFunc);
        input.addEventListener('blur',bluredFunc);
    }

    function focusedFunc(event) {
        event.target.parentElement.classList.add('focused')
    }

    function bluredFunc(event) {
        event.target.parentElement.classList.remove('focused');
    }
}