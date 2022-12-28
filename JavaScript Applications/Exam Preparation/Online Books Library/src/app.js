import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)
//TODO: login, register etc.

page(decorateContext)
page('/', '/dashboard')
page('/dashboard', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/dashboard/:id', showDetails);
page('/edit/:id', showEdit);

//Start page
updateNav();
page.start();


function decorateContext(ctx, next) {

    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}

function renderMain(content) {
    render(content, main)
}

function updateNav() {
    const user = getUserData();

    if(user) {
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${user.email}`
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}