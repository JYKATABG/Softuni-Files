const view = [...document.querySelectorAll('.view-section')]

function hideAll() {
    view.forEach(v => v.style.display = 'none')
}

export function showView(section) {
    hideAll()
    section.style.display = 'block'
}