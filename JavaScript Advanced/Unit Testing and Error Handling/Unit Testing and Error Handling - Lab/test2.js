function deckOfCards(cards) {
    let result = [];

    for (let card of cards) {
        let newFace = card.slice(0, -1);
        let newSuit = card.slice(-1);

        try {
            let newCard = createCard(newFace, newSuit);
            result.push(newCard);
        } catch (error) {
            result = [`Invalid card: ${card}`];
        }
    }
    console.log(result.join(" "));


    function createCard(face, suit) {
        let validCartFaces = ["2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K", "A"];
        let validCartSuits = ["S", "H", "D", "C"];

        if (!validCartFaces.includes(face)) {
            throw new Error(`Invalid face: ${face}`)
        }

        if (!validCartSuits.includes(suit)) {
            throw new Error(`Invalid suit: ${suit}`)
        }


        switch (suit) {
            case "S": suit = "\u2660"; break;
            case "H": suit = "\u2665"; break;
            case "D": suit = "\u2666"; break;
            case "C": suit = "\u2663"; break;
        }

        let cardObj = {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;
            },
        };
        return cardObj
    }
}
deckOfCards(['AS', '10D', 'KH', '2C'])