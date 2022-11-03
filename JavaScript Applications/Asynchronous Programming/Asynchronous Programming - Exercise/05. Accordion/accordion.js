async function solution() {
    try {
        let url = 'http://localhost:3030/jsonstore/advanced/articles/list'
        let response = await fetch(url);

        if(!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
        }

        let data = await response.json();

        data.forEach(x => {
            let articleElement = document.createElement('div')
            articleElement.classList.add('accordion')
            articleElement.innerHTML = 
            `
            <div class="head">
            <span>${x.title}</span>
            <button class="button" id="${x._id}" onclick="showMore(event)">More</button>
            </div>
            <div class="extra"></div>
            `

            let main = document.getElementById('main')
            main.appendChild(articleElement)
        });

    } catch (error) {
       console.log(error); 
    }
}

async function showMore(e) {
        try {
            let url = `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
            let parent = e.target.parentNode.parentNode
            let extraDiv = parent.querySelector('div.extra')

            let response = await fetch(url)

            if(!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }

            let data = await response.json()

            extraDiv.innerHTML = 
            `
            <p>${data.content}</p>
            `

            if(e.target.textContent == "More") {
                e.target.textContent = "Less"
                extraDiv.style.display = 'block'
            } else {
                e.target.textContent = "More"
                extraDiv.style.display = 'none'
            }

        } catch (error) {
            console.log(error);
        }
}
solution()