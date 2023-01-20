window.addEventListener('load', solve);

function solve() {
    let input = {
        genre: document.getElementById("genre"),
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        date: document.getElementById("date"),
    }

    let hits = {
        allHits: document.getElementsByClassName("all-hits-container")[0],
        savedHits: document.getElementsByClassName("saved-container")[0]
    }

    document.getElementById("add-btn").addEventListener("click", add)

    let totalLikes = 0;

    function add(e) {
        e.preventDefault();
        //read input fields
        let genre = input.genre.value;
        let name = input.name.value;
        let author = input.author.value;
        let date = input.date.value;

        //validate input
        if (genre == "" || name == "" || author == "" || date == "") {
            return;
        }
        //create a div and make the structure

        let div = document.createElement("div");
        div.classList.add("hits-info")
        //add the div to all-hits-container
        hits.allHits.appendChild(div);

        let img = document.createElement("img");
        img.src = "./static/img/img.png"
        div.appendChild(img)

        let h2Genre = document.createElement("h2");
        h2Genre.textContent = `Genre: ${genre}`
        div.appendChild(h2Genre);

        let h2Name = document.createElement("h2");
        h2Name.textContent = `Name: ${name}`
        div.appendChild(h2Name);

        let h2Author = document.createElement("h2");
        h2Author.textContent = `Author: ${author}`
        div.appendChild(h2Author);

        let h2Date = document.createElement("h3");
        h2Date.textContent = `Date: ${date}`
        div.appendChild(h2Date);

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save song";
        saveBtn.addEventListener("click", save)
        div.appendChild(saveBtn);

        let likeBtn = document.createElement("button")
        likeBtn.classList.add("like-btn");
        likeBtn.textContent = "Like song";
        likeBtn.addEventListener("click", like)
        div.appendChild(likeBtn);

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteFunc)
        div.appendChild(deleteBtn);

        //clear the input fields
        input.genre.value = "";
        input.name.value = "";
        input.author.value = "";
        input.date.value = "";

        function save(e) {
            e.preventDefault()
            div.remove()
            hits.savedHits.appendChild(div)

            likeBtn.remove()
            saveBtn.remove();
        }

        function like(e) {
            e.preventDefault()
            let likes = document.getElementsByClassName("likes")[0];
            let initLikes = likes.children[0];
            totalLikes += 1;
            likeBtn.disabled = true;
            initLikes.textContent = `Total Likes: ${totalLikes}`
        }

        function deleteFunc(e) {
            e.preventDefault()

            div.remove();
        }
    }
}
