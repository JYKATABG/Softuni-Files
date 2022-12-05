import page from "https://unpkg.com/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { showAbout } from "./about.js";
import { showCatalog } from "./catalog.js";
import { showCreate } from "./create.js";
import { showHome } from "./home.js";
import { notFound } from "./notFound.js";


function decorateContext(ctx, next) {
    ctx.render = function(content) {
        render(content, document.querySelector('main'));
    }
    next();
}

page(decorateContext)
page('/index.html','/')
page('/', showHome);
page('/catalog', showCatalog);
page('/create', showCreate)
page('/about', showAbout);
page('*', notFound)

page.start();