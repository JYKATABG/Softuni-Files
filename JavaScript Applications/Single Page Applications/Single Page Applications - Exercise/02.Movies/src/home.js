import { showView, spinner } from "./utils.js";

const section = document.querySelector("#home-page");
const catalog = document.querySelector("#movie .card-deck.d-flex.justify-content-center");

export function homePage() {
    showView(section);
    displayMovies()
}

async function displayMovies() {
    catalog.replaceChildren(spinner());
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMovie));
}

function createMovie(movie) {
    const element = document.createElement("div");
    element.className = "card mb-4";
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a data-id="${movie._id}" href="#/details/${movie._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    `;

    return element
}

async function getMovies() {
    let url = "http://localhost:3030/data/movies";
    let response = await fetch(url);
    let data = await response.json();

    return data;
}