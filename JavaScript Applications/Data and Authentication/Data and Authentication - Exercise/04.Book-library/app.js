let table = document.querySelector("tbody");
let form = document.querySelector("form");
let formBtn = form.querySelector("button");
let loadBtn = document.getElementById("loadBooks");
let h3 = form.querySelector("h3");

let url = "http://localhost:3030/jsonstore/collections/books";

let id = "";

loadBtn.addEventListener("click", load);
form.addEventListener("submit", submitOrUpdate);

async function load(e) {
    let response = await fetch(url)
    let data = await response.json()


    table.replaceChildren();
    Object.entries(data).forEach(([key, info]) => {
        let tr = htmlGenerator('tr', '', table);
        tr.id = key

        htmlGenerator('td', `${info.title}`, tr);
        htmlGenerator('td', `${info.author}`, tr);
        let buttonsTd = htmlGenerator('td', '', tr);

        let editBtn = htmlGenerator('button', 'Edit', buttonsTd);
        editBtn.addEventListener("click", edit);

        let deleteBtn = htmlGenerator('button', 'Delete', buttonsTd);
        deleteBtn.addEventListener("click", remove);
    });
}

async function submitOrUpdate(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    let title = data.get("title");
    let author = data.get("author");

    let bookData = {
        title,
        author,
    };

    if (formBtn.textContent == "Save") {
        if (!title || !author) {
            alert("All fields are required");
            return;
        } else {
            await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            });
        }

        h3.textContent = "FORM";
        formBtn.textContent = "Submit";
    } else {
        if (!title || !author) {
            alert("All fields are required");
            return;
        } else {
            await fetch(`${url}`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(bookData),
            });
        }
    }
    load();
    form.reset();
}

async function remove(e) {
    let id = e.target.parentNode.parentNode.getAttribute('id');

    await fetch(`${url}/${id}`, {
        method: "DELETE",
    });

    load();
}

function edit(e) {
    e.preventDefault();

    id = e.target.parentNode.parentNode.id;

    h3.textContent = "Edit FORM";
    formBtn.textContent = "Save";

    form.querySelector("input[name=title]").value =
        e.target.parentNode.parentNode.children[0].textContent;
    form.querySelector("input[name=author]").value =
        e.target.parentNode.parentNode.children[1].textContent;
}

function htmlGenerator(tag, content, parent) {
    let el = document.createElement(tag)
    el.textContent = content

    if (parent) {
        parent.appendChild(el)
    }
    return el
}

// //let table = document.getElementsByTagName('tbody')[0]
// let form = document.getElementsByTagName('form')[0]
// let loadBtn = document.getElementById('loadBooks')
// let url = 'http://localhost:3030/jsonstore/collections/books'

// loadBtn.addEventListener('click', load)
// form.addEventListener('submit',submit)

// function load(e) {
//     e.preventDefault();

//     fetch(url)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Cant load books')
//         }

//         return response.json();
//     })
//     .then(data => {
//         table.innerHTML = ''
//         Object.values(data).forEach(b => {
//             let randomData = data
//             console.log(randomData);
//             let trMain = document.createElement('tr')

//             let tdAuthor = document.createElement('td')
//             tdAuthor.textContent = b.author;

//             let tdTitle = document.createElement('td')
//             tdTitle.textContent = b.title

//             let tdElement = document.createElement('td')

//             let editBtn = document.createElement('button')
//             editBtn.textContent = 'Edit';
//             editBtn.addEventListener('click',edit)

//             let deleteBtn = document.createElement('button')
//             deleteBtn.textContent = 'Delete';
//             deleteBtn.setAttribute('id',`${b._id}`)
//             deleteBtn.addEventListener('click', remove)

//             trMain.appendChild(tdTitle)
//             trMain.appendChild(tdAuthor)
//             trMain.appendChild(tdElement)
//             tdElement.appendChild(editBtn)
//             tdElement.appendChild(deleteBtn)
//             table.appendChild(trMain)
//         })
//     })
// }

// function submit(e) {
//     e.preventDefault()

//     let titleElement = document.querySelector('[name="title"]')
//     let authorElement = document.querySelector('[name="author"]')

//     if(!titleElement.value || !authorElement.value) {
//         return
//     }

//     table.replaceChildren()
//     fetch(url, {
//         method: 'post',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: titleElement.value,
//             author: authorElement.value
//         })
//     })
// }

// function remove(e) {
//     console.log("Remove clicked");
// }

// function edit() {}
