import md5 from "md5";

class Card {
    constructor(front, back, deckId) {
        this.front = front;
        this.back = back;
        this.deckId = deckId;
        this.id = md5(front + back + deckId);
    }

    setFromObject(obj) {
        this.front = obj.name;
        this.back = obj.back;
        this.deckId = obj.deckId;
        this.id = obj.id;
    }

    static fromObject(obj) {
        let c = new Card(obj.front, obj.back, obj.deckId);
        c.setFromObject(obj);
        return c;
    }
}

export default Card;