let table = document.querySelector('#results tbody');
let form = document.querySelector('form')
let url = 'http://localhost:3030/jsonstore/collections/students';

window.addEventListener('load', loadStudent)
form.addEventListener('submit',createStudent)

async function loadStudent() {
    try {
        let response = await fetch(url)

        if (!response.ok) {
            throw new Error('Cant fetch')
        }

        let data = await response.json();

        Object.values(data).forEach(r => {
                let student = createElement('tr',
                createElement('td', r.firstName),
                createElement('td', r.lastName),
                createElement('td', r.facultyNumber),
                createElement('td', r.grade),
            )

            table.appendChild(student)
        })
    } catch (error) {
        alert(error.message)
    }
}

async function createStudent(e) {
    e.preventDefault()

    let dataFrom = new FormData(form)
    let infoArr = [...dataFrom.values()]

    let gradeNumber = Number(infoArr[3].trim())

    table.replaceChildren()
    try {
        let response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: infoArr[0],
                lastName: infoArr[1],
                facultyNumber: infoArr[2],
                grade: gradeNumber
            })
        })

        if (!response.ok) {
            throw new Error('Cant create new student')
        }

        loadStudent()

    } catch (error) {
        alert(error)
    }
}

function createElement(type, ...content) {
    let element = document.createElement(type)

    content.forEach(c => {
        if (typeof c === 'number' || typeof c === 'string') {
            c = document.createTextNode(c)
        }
        element.appendChild(c);
    })

    return element;
}