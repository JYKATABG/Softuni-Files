async function loadRepos () {
    const url = "https://api.github.com/users/testnakov/repos"

    const response = await fetch(url);
    const data = await response.json();

    return data
}