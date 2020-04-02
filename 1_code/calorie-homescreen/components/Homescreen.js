import React, {Component} from 'react';
import {FontAwesome, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';


class Homescreen extends React.Component {
 
   static navigationOptions = {
    title: 'Home',
    headerTintColor: '#fff',
 
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} >Calorie Tracker</Text>
        <Text style = {styles.numText}> 700/1800 </Text>
        <Text style = {styles.subText}> Daily Calories</Text>
        <View style ={styles.rowContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Food')} style=          {styles.smallContainer}>
            <MaterialCommunityIcons 
            name= 'apple'
            size = {50}
            />
            <Text style = {styles.item}>
              Input Food
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Exercise')} style={styles.smallContainer} >
          <MaterialCommunityIcons 
          name= 'run' 
          size = {50}
          />
          <Text style = {styles.item}>
            Input Exercise
          </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style = {styles.bottomText}>
            Calories Burned (Daily): 400
          </Text>
          <Text style = {styles.bottomText}>
            Calories Burned (Weekly): 2000
          </Text>
          <Text style = {styles.bottomText}>
            Total Workouts: 6
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  smallContainer: {
    paddingRight: 20,
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    marginTop: 50,
    padding: 15,
    alignItems: 'left',
    backgroundColor: '#F0F8FF',
  },
  bottomText: {
    fontSize: 18,
    margin:5,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 10,
 fontWeight: 'bold'
  },
  numText: {
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  subText: {
    paddingBottom: 60,
    fontSize: 20,
    textAlign: 'center',
  },
  rowContainer: {
    textAlign: 'center',
    flexDirection : 'row',
    padding: 18,
  },
  item: {
    textAlign: 'center',
    margin: 20,
    fontSize: 18,
    paddingLeft:15,
    paddingRight:15,
  }
});

export default Homescreen;