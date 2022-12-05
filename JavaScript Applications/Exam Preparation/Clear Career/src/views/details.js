import { deleteOffer, getOffersById } from '../api/offers.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (offer, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        
        <div id="action-buttons">
        ${isOwner ? html `
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="#" id="delete-btn">Delete</a>` 
            : ''}

            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="apply-btn">Apply</a>
        </div>
    </div>
</section>`

export async function showDetails(ctx) {
    const offer = await getOffersById(ctx.params.id);

    const user = getUserData();
    const isOwner = user?._id == offer._ownerId

    ctx.render(detailsTemplate(offer, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are u sure u wanna delete this offer?')
        if(choice) {
            await deleteOffer(ctx.params.id)
            ctx.page.redirect('/dashboard');
        }
    }
}