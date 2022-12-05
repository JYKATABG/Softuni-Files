import { logout } from './api/user.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js'
import { showLogin } from './views/login.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', showHome)
page('/memes', showCatalog)
page('/memes/:id', showDetails)
page('/edit/:id', showEdit)
page('/create', showCreate)
page('/profile', showProfile)
page('/login', showLogin)
page('/register', showRegister)

updateNav()
page.start();

function decorateContext(ctx, next) {

    ctx.render = renderMain
    ctx.updateNav = updateNav

    next()
}

function renderMain(content) {
    render(content, main)
}

function updateNav() {
    const user = getUserData();

    if (user) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${user.email}`
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}