import {ADD_DECK, ADD_CARD, LOAD_DATA} from "./../action/types";
import {writeDecks} from "./../storage/decks";

const addCard = (decks, card) => {
    let newState = decks.map(deck => {
        if(deck.id === card.deckId) {
            deck.addCard(card);
        }
        return deck;
    });
    writeDecks(newState);
    return newState;
}

const reducer = (state=[], action) => {
    switch(action.type) {
        case ADD_DECK:
            let newState = state.concat(action.data);
            writeDecks(newState);
            return newState;
        case ADD_CARD:
            return addCard(state, action.data);
        case LOAD_DATA:
            return action.data;
        default:
            return state;
    }
}

export default reducer;