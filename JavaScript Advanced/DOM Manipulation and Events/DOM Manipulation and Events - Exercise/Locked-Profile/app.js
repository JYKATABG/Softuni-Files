function lockedProfile() {

    let allButtons = Array.from(document.querySelectorAll('button')).forEach(button => {
        button.addEventListener('click',showInfo);
    })

    function showInfo(event) {
        let button = event.target;
        let information = event.target.parentElement.getElementsByTagName('div')[0];
        let radioCheck = button.parentElement.querySelector('input[type="radio"]:checked').value;

        if(radioCheck === 'unlock') {
            if(button.textContent === "Show more") {
                information.style.display = "inline-block";
                button.textContent = "Hide it"
            } else {
                information.style.display = "none";
                button.textContent = "Show more"
            }
        }
    }

}