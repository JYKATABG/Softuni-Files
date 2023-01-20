function lockedProfile() {

    let allButtons = Array.from(document.querySelectorAll('button')).forEach(button => {
        button.addEventListener("click",showInfo);
    })

    function showInfo(event) {
       let button = event.target;
       let accountInfo = event.target.parentElement.querySelector("div");
       let radioButtons = event.target.parentElement.querySelector('input[type="radio"]:checked').value;

       if(radioButtons === "unlock") {
        if(button.textContent === "Show more") {
            accountInfo.style.display = "inline-block";
            button.textContent = "Hide it";
        } else {
            accountInfo.style.display = "none";
            button.textContent = "Show more";
        }
       }
    }

}