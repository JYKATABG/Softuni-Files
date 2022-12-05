import { getAllOffers } from '../api/offers.js';
import { html } from '../lib.js'

const dashBoardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offers.length == 0 ? html`<h2>No offers yet.</h2>` : offers.map(offerCard)}
</section>`

const offerCard = (offer) => html`
<div class="offer">
    <img src=${offer.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/dashboard/${offer._id}">Details</a>
</div>`

export async function showDashBoard(ctx) {
    const offers = await getAllOffers();

    ctx.render(dashBoardTemplate(offers));

}