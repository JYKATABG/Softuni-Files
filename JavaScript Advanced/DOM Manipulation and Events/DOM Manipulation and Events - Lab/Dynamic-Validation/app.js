function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    let email = document.getElementById("email");
    email.addEventListener('change', testingEmail)

    function testingEmail(event) {
        let email = event.target.value;
        let target = event.target
        if (pattern.test(email)) {
            target.classList.remove('error')
        } else {
            target.classList.add('error');
        }
    }
}