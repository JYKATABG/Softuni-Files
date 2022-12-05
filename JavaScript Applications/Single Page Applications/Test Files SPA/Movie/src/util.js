let view = [...document.querySelectorAll('.view-section')]

function hideAll() {
    view.forEach(p => p.style.display = 'none')
}

export function showView(section) {
    hideAll()
    section.style.display = 'block'
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';

    return element
}

export function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('user'))
    const welcomeMessage = document.querySelector('#welcome-msg')
    if(user) {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'inline-block')
        document.querySelectorAll('.guest').forEach(g => g.style.display = 'none');
        welcomeMessage.textContent = `Welcome, ${user.email}`
    } else {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'none')
        document.querySelectorAll('.guest').forEach(g => g.style.display = 'inline-block');
        welcomeMessage.textContent = ``
    }
}