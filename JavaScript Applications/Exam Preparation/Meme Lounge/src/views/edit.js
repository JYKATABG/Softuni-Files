import { editMeme, getById } from '../api/memes.js';
import { notify } from '../notify.js';
import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js';

const editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}> </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

export async function showEdit(ctx) {
    const meme = await getById(ctx.params.id);

    ctx.render(editTemplate(meme, createSubmitHandler(onSubmit)));

    async function onSubmit({ title, description, imageUrl }) {

        if (!title || !description || !imageUrl) {
            return notify('All fields are required');
        }

        await editMeme(ctx.params.id, { title, description, imageUrl })
        ctx.page.redirect('/memes/' + ctx.params.id)
    }
}