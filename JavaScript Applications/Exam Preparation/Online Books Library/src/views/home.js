import { getAllBooks } from '../api/books.js';
import { html } from '../lib.js';

const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${books.length == 0 ? html`<p class="no-books">No books in database!</p>` : books.map(booksCard)}
    <!-- Display paragraph: If there are no books in the database -->
    
</section>`

const booksCard = (book) => html`
<ul class="other-books-list">
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/dashboard/${book._id}">Details</a>
    </li>
</ul>`

export async function showHome(ctx) {
    const books = await getAllBooks();

    ctx.render(homeTemplate(books));
}