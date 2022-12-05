import { logout } from './api/user.js';
import { page, render } from './lib.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.querySelector('#content')
//document.getElementById('logoutBtn').addEventListener('click', onLogout)


page(decorateContext);
page('/index.html', '/')
page('/', showHome)
page('/catalog', showCatalog)
page('/catalog/:id', () => console.log('details'))
page('/edit/:id', () => console.log('edit'))
page('/login', showLogin)
page('/register', showRegister)
page('/create', () => console.log('create'))

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next()
}

function renderMain(content) {
    render(content, main)
}

function onLogout() {
    logout();
    page.redirect('/');
}

