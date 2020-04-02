import React, { Component } from "react";
import { Button, Dimensions, Text, View, StyleSheet, Image, TextInput, 
ActivityIndicator, TouchableOpacity, FlatList, Platform, Alert, YellowBox } from 'react-native';
import { Card,DataTable  } from 'react-native-paper';
import axios from 'axios';
import {Ionicons} from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';

class FoodInput extends React.Component {
  static navigationOptions = {
    title: "Food",
    headerTintColor: '#1E90FF',
    headerStyle: {
      backgroundColor: "#FFFFFF"
    }
  };

  constructor(props) {
    super(props);

    this.state = { //sets the original states
      searchInput: '',
      i: 1,
      searchResult: null,
      freq: null,
      error: "",
      isLoading: false
    };
  }

  searchFood = async() =>{//function to fetch Data
    this.setState({
      isLoading: true
    });
  var url = "https://api.edamam.com/api/food-database/parser?ingr="
  var ing = this.state.searchInput
  var api = "&app_id=16847fd7&app_key=2958984ba626fc9c860d0c89d5178b49"
  url = url.concat(ing)
  url = url.concat(api)

  var requestOptions = {
  method: 'GET'
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result =>{
    console.log(result)
    var res = result
    console.log(res.hints[0].food)
    this.setState({ //changes state
          isLoading: false,
          searchResult:{//information from API
            name: res.hints[0].food.label,
            oCal: res.hints[0].food.nutrients.ENERC_KCAL,
            cals: res.hints[0].food.nutrients.ENERC_KCAL,
            image: res.hints[0].food.image
          }
         })
  } 
      )
  .catch(error => console.log('error', error));

    
  }

  searchFoodUPC = async() =>{//function to fetch Data
    this.setState({
      isLoading: true
    });
  var url = "https://api.edamam.com/api/food-database/parser?upc="
  var ing = this.state.searchInput
  var api = "&app_id=16847fd7&app_key=2958984ba626fc9c860d0c89d5178b49"
  url = url.concat(ing)
  url = url.concat(api)

  var requestOptions = {
  method: 'GET'
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result =>{
    console.log(result)
    var res = result
    console.log(res.hints[0].food)
    this.setState({ //changes state
          isLoading: false,
          searchResult:{//information from API
            name: res.hints[0].food.label,
            oCal: res.hints[0].food.nutrients.ENERC_KCAL,
            cals: res.hints[0].food.nutrients.ENERC_KCAL,
            image: res.hints[0].food.image
          }
         })
  } 
      )
  .catch(error => console.log('error', error));

    
  }

  goBack = async() =>{
    this.setState({
      isLoading: false,
      searchResult: null
    })
  }

    onChangeText(input){
      this.setState((state) =>{
      return{searchInput: input}})
    }


  render() {
  let { searchInput, searchResult, isLoading, error,i,freq} = this.state;
     if (isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"}}>
          <ActivityIndicator />
          <TouchableOpacity 
          onPress= {this.goBack}>
          <Text>Cancel</Text></TouchableOpacity>
          </View>);
    }else if (error) {
      return (
      <View>
          <Text>{error}</Text>
        </View>
      );
    }
    if(searchResult){
      return(

        <View style = {styles.container1}>
        <Card elevation = {10} style={{width: Dimensions.get('screen').width,
height: 115, margin: 10, justifyContent: 'center'}}> 
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View style = {{flexDirection: 'column'}}>

          <Text style ={{fontSize:30, textTransform: 'capitalize'}}>{searchResult.name} </Text>

          <Text>{searchResult.cals} calories</Text></View>
          <View style={{flexDirection: 'row-reverse', alignContent: 'center'}}>
          <Image 
          source= {{uri: searchResult.image}} 
          style = {{ width: 100, height: 100, borderRadius: 100/ 2}}/>
               </View></View></Card> 
               <Card elevation = {10} style={{width: Dimensions.get('screen').width, height: 80, margin: 8, alignItems: 'center'}}>
               <View style= {{alignItems: 'center'}}>
          <Text style= {{justifyItems: 'center', adjustsFontSizeToFit
: true}}>   Quantity </Text>
          <InputSpinner
              value = {i}
              min= {0}
              colorMax={"#f04048"}
	            colorMin={"#40c5f4"}
          />
          </View>
          </Card>
          <View style = {{flexDirection: 'row', alignItems: 'space-between' }}>
          <TouchableOpacity 
          onPress= {this.goBack}> 
          <Image
          source = {require('../assets/icons8-cancel-64.png')}
          style = {{width: 30, height: 30,}}
          
           />
          <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress= {() => {Alert.alert(searchResult.cals+' calories have been added to calorie tracker'), this.goBack}}>
          <Image
          source = {require('../assets/tasklist.png')}
          style = {{width: 30, height: 30,}}
          />
          <Text> Add</Text>
          </TouchableOpacity>
          </View>
          <Image 
          source = {require('../assets/logo.png')}
          style = {{width: 200, height: 40}} />
        </View>
        );
    }    
    return (

      <View style={styles.container}>

      <Text style ={styles.paragraph}> Food Search</Text>
        <TextInput
          style={{ height: 30, width: 250, borderColor: 'gray', borderWidth: 1, borderRadius: 100/2, fontSize: 10, textAlign: 'center'}}
          placeholder = {"Search by Food Name"}
          
          onChangeText={(searchInput) => {this.setState({searchInput: searchInput})}}
          onSubmitEditing = {this.searchFood}
          returnKeyType = {'search'}
         />
                 <TextInput
          style={{ height: 30, width: 250, borderColor: 'gray', borderWidth: 1, margin: 10, borderRadius: 100/2, fontSize: 10, textAlign: 'center'}}
          placeholder = {"Search by UPC Barcode Number"}
          
          onChangeText={(searchInput) => {this.setState({searchInput: searchInput})}}
          onSubmitEditing = {this.searchFoodUPC}
          returnKeyType = {'search'}
         />
         <DataTable style= {{color: 'white', marginTop: 80 }}>
        <DataTable.Header>
          <DataTable.Title>Favorite Meals</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Greek Salad</DataTable.Cell>
          <DataTable.Cell numeric>84</DataTable.Cell>
          <DataTable.Cell numeric>X</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>BLT</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>X</DataTable.Cell>
        </DataTable.Row>
      <DataTable.Row>
          <DataTable.Cell>Water</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>X</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-3 of 6"
        />
      </DataTable>



                       
      </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom:100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white'
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    //backgroundColor: 'white'
    
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white'
  },
});

export default FoodInput;