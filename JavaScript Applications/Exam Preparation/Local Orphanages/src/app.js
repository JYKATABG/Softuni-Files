import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showLogin } from "./view/login.js";
import { showMyposts } from "./view/myposts.js";
import { showRegister } from "./view/register.js";

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('index.html', '/catalog')
page('/', '/catalog')
page('/catalog', showCatalog);


page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);


page('/myposts', showMyposts);
page('/create', showCreate);

page('/login', showLogin);
page('/register', showRegister);

//Start page
updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain
    ctx.updateNav = updateNav

    next();
}

function renderMain(content) {
    render(content, main);
}

function updateNav() {
    const user = getUserData();

    if(user) {
        document.querySelector('#user').style.display = 'block'
        document.querySelector('#guest').style.display = 'none'
    } else {
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'block'
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/catalog')
}