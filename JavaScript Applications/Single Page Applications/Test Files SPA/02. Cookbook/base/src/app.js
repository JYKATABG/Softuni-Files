import { showView } from "./utils.js"
import { createPage } from "./create.js"
import { homePage } from "./home.js"
import { loginPage } from "./login.js"
import { registerPage } from "./register.js"




let routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage
}

document.querySelector('nav').addEventListener('click', loadNav)


function loadNav(e) {
    if(e.target.tagName == 'A') {
        e.preventDefault()
        const url = new URL(e.target.href)

        const view = routes[url.pathname]

        if(typeof view == 'function') {
            view()
        }
    }
}

function logout() {
    alert('logged out')
}

homePage()