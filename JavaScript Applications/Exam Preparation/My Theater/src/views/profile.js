import { getUserDataById } from '../api/events.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const profileTemplate = (events, user) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>

    ${events == 0 ? html`
    <div class="no-events">
        <p>This user has no events yet!</p>
    </div>` : events.map(eventCard)}

</section>`

const eventCard = (event) => html`
<div class="board">
    <div class="eventBoard">
        <div class="event-info">
            <img src=${event.imageUrl}>
            <h2>${event.title}</h2>
            <h6>${event.date}</h6>
            <a href="/home/${event._id}" class="details-button">Details</a>
        </div>
    </div>
</div>`;

export async function showProfile(ctx) {
    const user = getUserData();
    const events = await getUserDataById(user._id);

    ctx.render(profileTemplate(events, user));
}