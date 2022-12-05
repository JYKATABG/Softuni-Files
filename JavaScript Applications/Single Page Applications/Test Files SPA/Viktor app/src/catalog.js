export async function showRecipes() {
    [...document.querySelectorAll('section')].forEach(r => r.style.display = 'none')
    document.getElementById('recipe-list').style.display = 'block'

    const recipe = await getAllRecipes()
    displayRecipes(recipe)
}


async function getAllRecipes() {
    let response = await(fetch('http://localhost:3030/data/recipes?=select=' + encodeURIComponent('_id,name'))) 
    let recipe = await response.json();

    return recipe
}

function displayRecipes(recipe) {
    const item = recipe.map(createRecipe)

    const fragment = document.createDocumentFragment()
    for(let el of item) {
        fragment.appendChild(el)

    }

    const list = document.getElementById('recipe-list')
    list.replaceChildren(fragment)
}

function createRecipe(recipe) {
    const element = document.createElement('li');
    element.textContent = recipe.name

    return element;
}