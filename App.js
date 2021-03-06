import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from './features/decks';
import NewDeck from './features/newDeck';
import IndividualDeck from './features/individualDeck';
import AddQuestion from './features/addQuestion';
import QuizScreen from './features/quiz';

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  // NewDeck: {
  //   screen: NewDeck,
  //   navigationOptions: {
  //     tabBarLabel: 'Create Deck',
  //   },
  // },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Decks,
  },
  NewDeck: {
    screen: NewDeck,
  },
  IndividualDeck: {
    screen: IndividualDeck,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
  Quiz: {
    screen: QuizScreen,
  },
});

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
