import { homePage } from "./home.js"
import { showView } from "./util.js"

const section = document.querySelector('#add-movie')
const form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

export function createPage() {
    showView(section)
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form)

    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('imageUrl');

    if(title == "" || description == "" || img == "") {
        alert('All fields must be correct')
        return
    }

    await createMovie(title, description, img)
    form.reset();
    homePage()
}

async function createMovie(title,description,img) {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        let response = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({ title, description, img })

        })
    } catch (error) {
        alert(error)
    }
}