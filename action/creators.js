import {ADD_DECK, ADD_CARD, START_REVIEW, NEXT_REVIEW, STOP_REVIEW, LOAD_DATA} from "./types";
import Deck from "../data/Deck";
import Card from "../data/Card";

export const addDeck = (name) => {
    return {type: ADD_DECK, data: new Deck(name) };
}

export const addCard = (front, back, deckId) => {
    return {type: ADD_CARD, data: new Card(front, back, deckId) };
}

export const startReview = (deckId) => {
    return {type: START_REVIEW, data: {deckId: deckId} };
}

export const nextReview = () => {
    return {type: NEXT_REVIEW, data: {} };
}

export const stopReview = () => {
    return {type: STOP_REVIEW, data: {} };
}

export const loadData = (data) => {
    return {type: LOAD_DATA, data: data };
}