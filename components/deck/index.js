import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { addDeck, startReview } from "./../../action/creators";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";

class DecksScreen extends Component {
  static displayName = "DecksScreen";
  static navigationOptions = { title: "All Decks" };

  _createDeck = (name) => {
    let action = addDeck(name);
    this.props.createDeck(action);
    this.props.navigation.navigate("CardCreation", {
      deckId: action.data.id
    });
  };

  _addCards = (deckId) => {
    this.props.navigation.navigate("CardCreation", { deckId: deckId });
  };

  _review = (deckId) => {
    this.props.reviewDeck(deckId);
    this.props.navigation.navigate("Review");
  };

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={this.props.counts[deck.id]}
          key={deck.id}
          add={() => {
            this._addCards(deck.id);
          }}
          review={() => {
            this._review(deck.id);
          }}
        />
      );
    });
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation create={this._createDeck} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDeck: (action) => {
      dispatch(action);
    },
    reviewDeck: (deckId) => {
      dispatch(startReview(deckId));
    }
  };
};

const mapStateToProps = (state) => {
  let count = state.deck != null ?
  state.decks.reduce(
    (sum, deck) => {
      sum[deck.id] = deck.cards.length;
      return sum;
    },
    {}
  ) : 0;
  return {
    decks: state.decks,
    counts: count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
