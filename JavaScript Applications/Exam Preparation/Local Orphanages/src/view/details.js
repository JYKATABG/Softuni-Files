import { donate, getDonations, getOwnDonation } from '../api/donations.js';
import { deletePost, getById } from '../api/posts.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (post, donations, hasUser, canDonate, isOwner, onDelete, onDonate) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                ${postControls(post, hasUser, canDonate, isOwner, onDelete, onDonate)}

            </div>
        </div>
    </div>
</section>`

function postControls(post, hasUser, canDonate, isOwner, onDelete, onDonate) {
    if (!hasUser) {
        return ''
    }

    if (canDonate) {
        return html`
            <div class="btns">
                <a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>
            </div>`;
    }

    if (isOwner) {
        return html`
        <div class="btns">
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a @click=${onDelete} href="#" class="delete-btn btn">Delete</a>
        </div>`;
    }
}

export async function showDetails(ctx) {


    const request = [
        getById(ctx.params.id),
        getDonations(ctx.params.id)
    ];

    const user = getUserData()
    const hasUser = !!user

    if (hasUser) {
        request.push(getOwnDonation(ctx.params.id, user._id))
    }
    const [post, donations, hasDonation] = await Promise.all(request)

    const isOwner = hasUser && user?._id == post._ownerId
    const canDonate = !isOwner && hasDonation == 0;


    ctx.render(detailsTemplate(post, donations, hasUser, canDonate, isOwner, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this post?')
        if (choice) {
            await deletePost(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onDonate() {
        await donate(ctx.params.id);
        ctx.page.redirect('/catalog/' + ctx.params.id);
    }
}