import { showView, updateNavigation } from "./util.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";


let routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/create': createPage,
    '/register': registerPage,
}


document.querySelector('nav').addEventListener('click', loadNav)
document.querySelector('#add-movie-button').addEventListener('click', loadNav)

function loadNav(event) {
    event.preventDefault()

    if(event.target.tagName == 'A' && event.target.href) {
        const href = event.target.href
        const url = new URL(href)
        const view = routes[url.pathname]

        if(typeof view == 'function') {
            view()
        }
    }
}

function logout() {
    localStorage.removeItem('user')
    updateNavigation()
}

updateNavigation()
homePage()