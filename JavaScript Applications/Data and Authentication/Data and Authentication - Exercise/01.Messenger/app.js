// function attachEvents() {
//     document.getElementById('submit').addEventListener('click',addMessage)
//     document.getElementById('refresh').addEventListener('click',displayComments)
// }

// let url = 'http://localhost:3030/jsonstore/messenger'

// function addMessage() {
//     let authorName = document.querySelector('[name="author"]')
//     let content = document.querySelector('[name="content"]')

//     if(!authorName.value || !content.value) {
//         return;
//     }

//     fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             author: authorName.value.trim(),
//             content: content.value.trim()
//         })
//     })
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Error creating new message')
//         }
//         return response.json()
//     })
//     .catch(error => alert(error))

//     authorName.value = '';
//     content.value = '';

// }

// function displayComments() {
//     fetch(url)
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Error can not display comment')
//         }
//         return response.json()
//     })
//     .then(data => {
//         let textArea = document.getElementById('messages')
//         let comments = []
//         Object.values(data).forEach(u => {
//             comments.push(`${u.author}: ${u.content}`)
//             textArea.value = comments.join('\n')
//         })
//     })
//     .catch(error => {
//         alert(error.message)
//     })
// }

// attachEvents();

function attachEvents() {

    document.getElementById('submit').addEventListener('click',addMessage)
    document.getElementById('refresh').addEventListener('click',displayMessages)
}
let url = 'http://localhost:3030/jsonstore/messenger';

function addMessage() {

    let authorName = document.querySelector('[name="author"]')
    let content = document.querySelector('[name="content"]')

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'appilication/json'
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: content.value.trim()
        })
    })
    .catch(error => console.log(error))

    content.value = '';
    
    displayMessages()
}

function displayMessages() {
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('error')
        }

        return response.json();
    })
    .then(data => {
        let textArea = document.getElementById('messages')
        let messages = [];
        Object.values(data).forEach(u => {
            messages.push(`${u.author}: ${u.content}`)
            textArea.value = messages.join('\n');
        })
    })
}
attachEvents()


