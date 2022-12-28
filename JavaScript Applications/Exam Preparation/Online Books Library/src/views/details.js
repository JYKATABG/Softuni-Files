import { deleteBook, getBookById } from '../api/books.js';
import { getLikes, getOwnLike, like } from '../api/likes.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (book, likes, hasUser, canLike, isOwner, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
            ${bookControls(book, hasUser, canLike, isOwner, onDelete, onLike)}
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

function bookControls(book, hasUser, canLike, isOwner, onDelete, onLike) {
    if (!hasUser) {
        return ''
    }

    if (canLike) {
        return html`
        <div class="actions">
            <a @click=${onLike} class="button" href="#">Like</a>
        </div>`
    }

    if (isOwner) {
        return html`
        <div class="actions">
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="#">Delete</a>
        </div>`
    }
}

export async function showDetails(ctx) {

    const request = [
        getBookById(ctx.params.id),
        getLikes(ctx.params.id)
    ];

    const user = getUserData();
    const hasUser = !!user;

    if (hasUser) {
        request.push(getOwnLike(ctx.params.id, user._id))
    }

    const [book, likes, hasLikes] = await Promise.all(request);

    const isOwner = hasUser && user._id == book._ownerId;
    const canLike = !isOwner && hasLikes == 0;

    ctx.render(detailsTemplate(book, likes, hasUser, canLike, isOwner, onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure u want to delete this book?');

        if (choice) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await like(ctx.params.id);
        ctx.page.redirect('/dashboard/' + ctx.params.id);
    }
}