function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    let arrArticle = Array.from(articles);

    return () => {
        if (arrArticle.length === 0) {
            return
        }
        let currentArticle = arrArticle.shift();
        let newArticle = document.createElement('article');
        newArticle.textContent = currentArticle; //newArticle.innerHTML = `<article>${currentArticle}</article>`
        content.appendChild(newArticle)
    }
}
