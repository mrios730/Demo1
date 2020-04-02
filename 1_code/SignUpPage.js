import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image,
  Alert, WebViewPlatform,} from 'react-native';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
  };

  onSignUpListener() {
    const { email, password } = this.state;
    Alert.alert('Credentials', `Email: ${email}  Password: ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.firstName}
          keyboardType = 'first-name'
          onChangeText={(firstName) => this.setState({ firstName })}
          placeholder='First Name'
          />   
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.lastName}
          keyboardType = 'last-name'
          onChangeText={(lastName) => this.setState({ lastName })}
          placeholder='Last Name'
          />   
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='Email'
          />   
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>

        <Button
          style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.onSignUpListener()}
          title="Sign Up"
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

export default SignUp;