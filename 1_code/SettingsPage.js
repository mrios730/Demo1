import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  WebView
} from 'react-native';
import Constants from 'expo-constants';

export default class SettingsView extends React.Component {
  //Log out call
  onLogoutListener = () => {
    Alert.alert('Logout pressed');
  }

  //Save button call
  onSaveListener = () => {
    Alert.alert('Save pressed');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
        Settings
        </Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          First Name:
          </Text>
          <TextInput style={styles.inputs}
              placeholder="First Name"
              />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Last Name:
          </Text>
          <TextInput style={styles.inputs}
              placeholder="Last Name"
              />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Email:
          </Text>
          <TextInput style={styles.inputs}
              placeholder="Email"
              />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Password: 
          </Text>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              />
        </View>

        <Button style={[styles.buttoncContainer, styles.button]}
            onPress={()=>this.onSaveListener()}
            title="Save"
            color="#00b5ec"
        />

        <Text style={styles.body}>
        </Text>

        <Button style={[styles.buttonContainer, styles.button]}
            onPress={()=>this.onLogoutListener()}
            title="Log Out"
            color="#00b5ec"
        />
        <Text style={styles.body}>
        </Text>

        <Button style={[styles.buttonContainer, styles.button]}
          onPress={() => this.props.navigation.goBack()}
            title="Back"
            color="#00b5ec"
        />
      </View>
    );
  }
}

var email, password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: 'black',
    flex:1,
  },
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    width:250,
  },
  title: {
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    margin: 5,
    fontSize: 16,
    textAlign: 'left',
  },
  button: {
    backgroundColor: "#00b5ec",
  }
});
