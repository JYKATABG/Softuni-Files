import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
    <a href="/home">Theater</a>
    <ul>
        <!--Only users-->
        ${hasUser ? html`
        <li class="user"><a href="/profile">Profile</a></li>
        <li class="user"><a href="/create">Create Event</a></li>
        <li class="user"><a @click=${onLogout} id="logoutBtn" href="javascript:void(0)">Logout</a></li>` : 
        html`
        <li class="guest"><a href="/login">Login</a></li>
        <li class="guest"><a href="/register">Register</a></li>`}
        <!--Only guest-->
    </ul>
</nav>`

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/home');
}