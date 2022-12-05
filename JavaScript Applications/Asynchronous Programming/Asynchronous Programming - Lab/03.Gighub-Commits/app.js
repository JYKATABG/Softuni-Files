function loadCommits() {
    // Try it with Fetch API
   const username = document.getElementById("username").value
   const repo = document.getElementById("repo").value
   fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
   .then(handleResponse)
   .then(handleData)
   .catch(handleError)
}

function handleResponse(response) {
    if(response.ok == false) {
        throw new Error(`Error: ${response.status}`)
    }
    return response.json()
}

function handleData(data) {
    const lists = document.getElementById("commits");

    data.forEach(commit => {
        const li = document.createElement("li")
        li.textContent = `${commit.commit.author.name}:${commit.commit.message}`;
        lists.appendChild(li)
    })

    // const items = data.map(commit => {
    //     const li = document.createElement("li")
    //     li.textContent = `${commit.author.name}:${commit.message}`;
    //     return li
    // });
}

function handleError(error) {
    const li = document.createElement("li")
    const list = document.getElementById("commits")
    list.textContent = `Error: ${error.status} (Not found)`
    list.appendChild(li);
}