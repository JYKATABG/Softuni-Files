function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', loadContact)
    document.querySelector('#btnCreate').addEventListener('click', createContact)
    document.querySelector('#phonebook').addEventListener('click',removeContanct)

}

let url = 'http://localhost:3030/jsonstore/phonebook'
let phonebook = document.getElementById('phonebook')

function loadContact() {
    fetch(url)
    .then(response => response.json())
    .then(data => {

        phonebook.replaceChildren()
       
        Object.values(data).forEach(p => {
            let li = document.createElement('li')
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete';
            li.textContent = `${p.person}: ${p.phone}`
            deleteBtn.setAttribute('id',`${p._id}`)
            li.appendChild(deleteBtn)
            phonebook.appendChild(li)
        })
    })    
}

function createContact() {
    let personElement = document.querySelector('#person');
    let phoneElement = document.querySelector('#phone');

    if(!personElement.value || !phoneElement.value) {
        return
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            person: personElement.value.trim(),
            phone: phoneElement.value.trim()
        })
    })
    .then(res => res.json())
    .catch(error => {
        alert(error.message)
    })

    personElement.value = ""
    phoneElement.value = ""

}

function removeContanct(e) {

    let id = e.target.id

    if(e.target.textContent == 'Delete') {
        fetch(`${url}/${id}`, {
            method: 'delete',
        })
        .then(res => {
            loadContact()

            return res.json()
        })
        .catch(error => alert(error.message))
    }
}

attachEvents();