function focused() {
    let inputs = document.getElementsByTagName('input')

    for(let input of inputs) {
        input.addEventListener('focus',focusedFunction);
        input.addEventListener('blur',bluredFunction);
    }

    function focusedFunction(event) {
        event.target.parentElement.classList.add('focused');
    }

    function bluredFunction(event) {
        event.target.parentElement.classList.remove('focused')
    }
}