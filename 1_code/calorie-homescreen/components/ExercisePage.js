import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,
  TextInput } from 'react-native';
import Constants from 'expo-constants';

class ExercisePage extends React.Component {
  static navigationOptions = {
    title: "Exercise",
    headerTintColor: '#1E90FF',
    headerStyle: {
      backgroundColor: "#FFFFFF"
     }
    };

  state = { //gender and weight will be taken from user inputs by the next demo
    backgroundColorR: 'ecf0f1',
    backgroundColorW: 'ecf0f1',
    backgroundColorC: 'ecf0f1',
    backgroundColorS: 'ecf0f1',
    backgroundColorD: 'ecf0f1',
    exerciseType: '',
    exerciseTime: 0,
    weight: 125,
    gender: 'female',
    caloriesBurned: 0,
    };

  selectType(exercise){ //changes the color of the button background to show user which option they selected
    if(exercise == 'Running'){
      this.setState({
        exerciseType: 'Running',
        backgroundColorR: 'gray', 
        backgroundColorW: 'ecf0f1',
        backgroundColorC: 'ecf0f1',
        backgroundColorS: 'ecf0f1',
        backgroundColorD: 'ecf0f1',
        });
    } else if(exercise == 'Walking'){
      this.setState({  
        exerciseType: 'Walking',
        backgroundColorR: 'ecf0f1',
        backgroundColorW: 'gray',
        backgroundColorC: 'ecf0f1',
        backgroundColorS: 'ecf0f1',
        backgroundColorD: 'ecf0f1',
        });
    } else if(exercise == 'Cycling'){
      this.setState({  
        exerciseType: 'Cycling',
        backgroundColorR: 'ecf0f1',
        backgroundColorW: 'ecf0f1',
        backgroundColorC: 'gray',
        backgroundColorS: 'ecf0f1',
        backgroundColorD: 'ecf0f1',
        });
    } else if(exercise == 'Swimming'){
      this.setState({ 
        exerciseType: 'Swimming',
        backgroundColorR: 'ecf0f1',
        backgroundColorW: 'ecf0f1',
        backgroundColorC: 'ecf0f1',
        backgroundColorS: 'gray',
        backgroundColorD: 'ecf0f1',
        });
    } else if(exercise == 'Dancing'){
      this.setState({ 
        exerciseType: 'Dancing',
        backgroundColorR: 'ecf0f1',
        backgroundColorW: 'ecf0f1',
        backgroundColorC: 'ecf0f1',
        backgroundColorS: 'ecf0f1',
        backgroundColorD: 'gray',
        });
    } else {
      this.setState({  
        exerciseType: '',
        backgroundColorR: 'ecf0f1',
        backgroundColorW: 'ecf0f1',
        backgroundColorC: 'ecf0f1',
        backgroundColorS: 'ecf0f1',
        backgroundColorD: 'ecf0f1',
        });
    }
  }

  calculateCalories(){ //uses gender and weight inputs from user to calculate calories burned
    if(this.state.exerciseType == 'Running' && this.state.gender == 'male'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(920/60)*(this.state.weight/175)});
    } else if(this.state.exerciseType == 'Running' && this.state.gender == 'female'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(740/60)*(this.state.weight/140)});
    } else if((this.state.exerciseType == 'Walking' || this.state.excerciseType == 'Cycling' || this.state.exerciseType == 'Dancing') && this.state.gender == 'male'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(460/60)*(this.state.weight/175)});
    } else if((this.state.exerciseType == 'Walking' || this.state.excerciseType == 'Cycling' || this.state.exerciseType == 'Dancing') && this.state.gender == 'female'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(370/60)*(this.state.weight/140)});
    } else if(this.state.exerciseType == 'Swimming' && this.state.gender == 'male'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(730/60)*(this.state.weight/175)});
    } else if(this.state.exerciseType == 'Swimming' && this.state.gender == 'female'){
      this.setState({caloriesBurned: parseInt(this.state.exerciseTime)*(580/60)*(this.state.weight/140)});
    } 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Exercise</Text>
        <Text style={styles.header}>Select one:</Text>
        <TouchableOpacity
          onPress={() => this.selectType('Running')}
          style={{ backgroundColor: this.state.backgroundColorR }}>
          <Text style={styles.items}>Running</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectType('Walking')}
          style={{ backgroundColor: this.state.backgroundColorW }}>
          <Text style={styles.items}>Walking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectType('Cycling')}
          style={{ backgroundColor: this.state.backgroundColorC }}>
          <Text style={styles.items}>Cycling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectType('Swimming')}
          style={{ backgroundColor: this.state.backgroundColorS }}>
          <Text style={styles.items}>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectType('Dancing')}
          style={{ backgroundColor: this.state.backgroundColorD }}>
          <Text style={styles.items}>Dancing</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Duration of exercise (in minutes):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          numeric value
          keyboardType = {"numeric"}
          onChangeText = {(exerciseTime) => { this.setState({ exerciseTime: exerciseTime})}}
        />
        <TouchableOpacity
          onPress={() => this.calculateCalories()}
          style={{ backgroundColor: 'black' }}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
            ENTER
          </Text>
        </TouchableOpacity>   
         <Text style={styles.title}>Calories burned: {this.state.caloriesBurned}</Text>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  items: {
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ExercisePage;