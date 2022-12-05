import { homePage } from "./home.js"
import { showView, updateNavigation } from "./util.js"

const section = document.querySelector('#form-sign-up')
const form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

export function registerPage() {
    showView(section)
}

async function onSubmit(e) {
    e.preventDefault()

    const formData = new FormData(form)

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if(email == "" || password == "" || repeatPassword == "") {
        alert('All fields must be filled')
        return
    }

    if(password.length < 6) {
        alert('The password should be at least 6 characters long')
        return
    }

    if(password !== repeatPassword) {
        alert('The repeat password should be equal to the password')
    }

    await register(email, password, repeatPassword)
    form.reset()
    updateNavigation()
    homePage()
}

async function register(email, password, repeatPassword) {
    try {
        let response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, repeatPassword })
        })

        const data = response.json();

        if(!response.ok) {
            throw new Error(data.message)
        }

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('userEmail', data.email);

    } catch (error) {
        alert(error.message)
        throw (error)
    }
}