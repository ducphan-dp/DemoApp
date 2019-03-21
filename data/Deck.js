import md5 from "md5";

class Deck {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.id = md5(name);
    }

    setFromObject(obj) {
        this.name = obj.name;
        this.cards = obj.cards;
        this.id = obj.id;
    }

    addCard(card) {
        this.cards = this.cards.concat(card);
    }

    static fromObject(obj) {
        let d = new Deck(obj.name);
        d.setFromObject(obj);
        return d;
    }
}

export default Deck;