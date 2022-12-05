import { deleteAlbum, getAllbumById } from '../api/album.js';
import { getLikes, getOwnLike, like } from '../api/likes.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (albums, likes, hasUser, canLike, isOwner, onDelete, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${albums.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${albums.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${albums.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${albums.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${albums.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${albums.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <!--Edit and Delete are only for creator-->
        ${albumControls(albums, hasUser, canLike, isOwner, onDelete, onLike)}
    </div>
</section>`

function albumControls(albums, hasUser, canLike, isOwner, onDelete, onLike) {
    if (!hasUser) {
        return ''
    }

    if (canLike) {
        return html`
                <div id="action-buttons">
                    <a @click=${onLike} href="#" id="like-btn">Like</a>
                </div>`
    }

    if (isOwner) {
        return html`
                <div id="action-buttons">
                    <a href="/edit/${albums._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="#" id="delete-btn">Delete</a>
                </div>`
    }
}

export async function showDetails(ctx) {

    const request = [
        getAllbumById(ctx.params.id),
        getLikes(ctx.params.id)
    ]

    const user = getUserData();
    const hasUser = !!user

    if (hasUser) {
        request.push(getOwnLike(ctx.params.id, user._id))
    }

    const [albums, likes, hasLike] = await Promise.all(request);

    const isOwner = hasUser && user?._id == albums._ownerId
    const canLike = !isOwner && hasLike == 0;

    ctx.render(detailsTemplate(albums, likes, hasUser, canLike, isOwner, onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure u want to delete this album?')

        if (choice) {
            await deleteAlbum(ctx.params.id)
            ctx.page.redirect('/catalog')
        }
    }

    async function onLike() {
        await like(ctx.params.id)
        ctx.page.redirect('/catalog/' + ctx.params.id);
    }
}