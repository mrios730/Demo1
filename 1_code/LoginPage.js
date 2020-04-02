import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image,
  Alert, WebViewPlatform,} from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  onLoginListener() {
    const { email, password } = this.state;
    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  state = {
      email: '',
      password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='email'
          />   
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'password'}
            secureTextEntry={true}
          />
        </View>

        <Button
          style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.onLoginListener()}
          title="Login"
          color="#00b5ec"
        />
        
        <Text style={styles.body}>
        </Text>

        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Back'
          onPress={() => this.props.navigation.goBack()}
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
    backgroundColor: 'white',
  },
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: 'black',
    flex:1,
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
  }
});

export default Login;