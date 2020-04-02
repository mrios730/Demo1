import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './components/Homescreen';
import FoodInput from './components/FoodInput';
import ExercisePage from './components/ExercisePage';

const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Food: { screen: FoodInput },
  Exercise: {screen: ExercisePage},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

