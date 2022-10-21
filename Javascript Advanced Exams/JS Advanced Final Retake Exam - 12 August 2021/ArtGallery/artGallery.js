class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }

        let name = this.listOfArticles.find(p => p.articleName === articleName);

        if (name && name.articleModel === articleModel) {
            name.quantity += quantity
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {

        let points = {
            "Vip": 500,
            "Middle": 250
        }

        let guest = this.guests.find(p => p.guestName === guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        }

        this.guests.push({
            guestName,
            points: points[personality] || 50,
            purchaseArticle: 0
        });
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(p => p.articleName === articleName);
        let guest = this.guests.find(p => p.guestName === guestName);

        if (!article || article.articleModel !== articleModel) {
            throw new Error("This article is not found.")
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        if (!guest) {
            return "This guest is not invited."
        }

        if (guest.points >= this.possibleArticles[article.articleModel]) {
            guest.points -= this.possibleArticles[article.articleModel]
            article.quantity--;
            guest.purchaseArticle++;
        } else {
            return `You need to more points to purchase the article.`
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[article.articleModel]} points.`
    }

    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let result = ["Articles information:"]
            this.listOfArticles.map(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return result.join("\n")
        }

        if (criteria === "guest") {
            let result = ["Guests information:"];
            this.guests.map(x => result.push(`${x.guestName} - ${x.purchaseArticle}`))
            return result.join("\n")
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



