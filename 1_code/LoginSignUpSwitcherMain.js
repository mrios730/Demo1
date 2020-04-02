import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SelectPage from './components/SelectPage';
import Login from './components/LoginPage';
import SignUp from './components/SignUpPage';

const RootStack = createStackNavigator(
  {
    Select: { screen: SelectPage },
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: 'Select',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

