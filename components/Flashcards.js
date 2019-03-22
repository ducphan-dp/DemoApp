import React, { Component } from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../reducer/index";
import { readDecks } from "../storage/decks";
import { loadData } from "../action/creators";
import Logo from "./header/Logo";
import DeckScreen from "./deck";
import Card from "./card";
import ReviewScreen from "./review";

let store = createStore(reducer);

let headerOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  headerLeft: <Logo />
};

// On application start, read saved state from disk.
readDecks().then(decks => {
  store.dispatch(loadData(decks));
});

const navigator = createStackNavigator({
  Home: { screen: DeckScreen, navigationOptions: headerOptions },
  Review: { screen: ReviewScreen, navigationOptions: headerOptions },
  CardCreation: {
    screen: Card,
    path: "createCard/:deckID",
    navigationOptions: headerOptions
  }
});

const AppNavigator = createAppContainer(navigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
