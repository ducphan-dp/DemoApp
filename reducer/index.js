import { MockDecks } from "../data/Mocks";
import { mkReviews } from "../data/QuizCardView";
import { mkReviewState } from "./review";
import DeckReducer from "./deck";
import ReviewReducer from "./review";

const initState = () => {
    return {decks: MockDecks, currentReview: mkReviewState()};
}

export const reducer = (state = initState(), action) => {
    let decks = DeckReducer(state.decks, action);
    return {
        decks: decks,
        currentReview: ReviewReducer(state.currentReview, action, decks)
    }
}