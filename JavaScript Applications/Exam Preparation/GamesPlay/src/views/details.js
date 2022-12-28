import { deleteGame, getGameById } from '../api/games.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                ${game.length == 0 ? html`<p class="no-comment">No comments.</p>` : html``}
            </ul>
            <!-- Display paragraph: If there are no games in the database -->

        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            ${isOwner ? html`
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="#" class="button">Delete</a>`
            : html``}
        </div>
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>

</section>`

const commentCard = () => html`
<li class="comment">
    <p>Content: I rate this one quite highly.</p>
</li>`

export async function showDetails(ctx) {
    const game = await getGameById(ctx.params.id);

    const user = getUserData();
    const isOwner = user?._id == game._ownerId

    ctx.render(detailsTemplate(game, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure u want to delete this game?');
        console.log(choice);

        if (choice) {
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}