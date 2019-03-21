import { mkReviews } from "../data/QuizCardView";
import { START_REVIEW, NEXT_REVIEW, STOP_REVIEW } from "../action/types";
import { stat } from "fs";

export const mkReviewState = (
    deckId = null,
    questions = [],
    currentQuestionIndex = 0
) => {
    return {deckId, questions, currentQuestionIndex};
}

const findDeck = (decks, id) => {
    return decks.find(deck => {
        return deck.id === id;
    });
}

const generateReviews = (deck) => {
    return mkReviewState(
        deck.id,
        mkReviews(deck.cards),
        0
    );
}

const nextReview = (state) => {
    return mkReviewState(
        state.deckId, 
        state.questions, 
        state.currentQuestionIndex + 1
    );
}

const reducer = (state = mkReviewState, action, decks) => {
    switch(action.type) {
        case START_REVIEW:
            return generateReviews(findDeck(decks, action.data.deckId));
        case NEXT_REVIEW:
            return nextReview(state);
        case STOP_REVIEW:
            return mkReviewState();
        default:
            return state;

    }
}

export default reducer;