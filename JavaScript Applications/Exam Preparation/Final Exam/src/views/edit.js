import { editAlbum, getAllbumById } from '../api/album.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (albums, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${albums.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${albums.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${albums.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${albums.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${albums.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${albums.sales} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function showEdit(ctx) {
    const albums = await getAllbumById(ctx.params.id)

    ctx.render(editTemplate(albums, createSubmitHandler(onEdit)))

    async function onEdit({ singer, album, imageUrl, release, label, sales }) {
        if(!singer || !album || !imageUrl || !release || !label || !sales) {
            return alert('All fields are required')
        }

        await editAlbum(ctx.params.id, {singer, album, imageUrl, release, label, sales})
        ctx.page.redirect('/catalog/' + ctx.params.id)
    }
}