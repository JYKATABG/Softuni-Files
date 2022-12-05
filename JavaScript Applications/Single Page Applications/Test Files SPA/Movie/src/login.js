import { homePage } from "./home.js"
import { showView, updateNavigation } from "./util.js"

const section = document.querySelector('#form-login')
const form = section.querySelector('form')
form.addEventListener('submit', onLogin)

export function loginPage() {
    showView(section)
}

async function onLogin(e) {
    e.preventDefault()

    const dataFrom = new FormData(form)
    const email = dataFrom.get('email')
    const password = dataFrom.get('password')

    if(email == "" || password == "") {
        alert('All fields must be correct')
        return
    }

    await login(email,password)
    form.reset();
    updateNavigation()
    homePage()
}

async function login(email,password) {
    try {
        let resoponse = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        })

        if(!resoponse.ok) {
            const error = await resoponse.json()
            throw new Error(error.message)
        }

        const user = await resoponse.json()
        localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        alert(error.message)
        throw(error)
    }
}