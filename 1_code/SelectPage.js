import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class SelectPage extends React.Component {
   static navigationOptions = {
    title: 'Select'
  }; 
 
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <Text style={styles.body}>
        </Text>

        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Sign Up'
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, 
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
  },
  button: {
    backgroundColor: "#00b5ec",
  }, 
});

export default SelectPage;