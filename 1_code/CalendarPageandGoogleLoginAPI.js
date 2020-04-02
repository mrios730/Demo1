import * as React from 'react';
import { Component } from 'react';
import { Button, Keyboard, Alert, KeyboardAvoidingView, Platform, Picker, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, TouchableHighlight, View, Image, ScrollView, TouchableOpacity, Dimensions, WebView } from 'react-native';
import Constants from 'expo-constants';
import { Permissions, Notifications, Linking, AuthSession } from 'expo';
const { height } = Dimensions.get('window');
 
const Google_APP_ID = '919255101126-3q0d7sn9r01kultevae1403gm1crvjh2.apps.googleusercontent.com';
 
class CalendarUI extends Component {
 
 _handlePress = () => {
   console.log("Link clicked for " + this.props.href);
   Linking.openURL(this.props.href);
   this.props.onPress && this.props.onPress();
 };
 
 constructor(props) {
   super(props);
  
   this.state = {
     freeToggle: true, //the toggle is set to one; upon being clicked, it turns off
     isLoading: true,
     screenHeight: height,
   };
  
   this.scrollY = 0;
 }
 
 // initialize variables
 state = {
   timeNeeded: '',
   startTime: '',
   endTime: '',
 }
 
 //update the workout time needed
 updateTimeNeeded = (timeNeeded) => {
   this.setState({ timeNeeded: timeNeeded })
 }
 
 //update the interval's start time
 updateStartTime = (startTime) => {
   this.setState({ startTime: startTime })
 }
 
 //update the interval's end time
 updateEndTime = (endTime) => {
   this.setState({ endTime: endTime })
 }
  // save the inputs given
 onSaveListener = () => {
 }
  //handlescroll : update current screen top y
 handleScroll = ({ nativeEvent }) => {
   const { contentOffset } = nativeEvent;
   this.scrollY = contentOffset.y;
   console.log(this.scrollY);
 };
 
 handleToggle = () => {
   console.log(this.scrollY);
   this.scrollView.scrollTo({ y: this.scrollY + 500, animated: true });
 };
 
 onContentSizeChange = (contentWidth, contentHeight) => {
   this.setState({ screenHeight: contentHeight });
 };
  successScreen = () => {
   return (
     <ScrollView ref={scrollView => {this.scrollView = scrollView;}}
       onContentSizeChange={this.onContentSizeChange}
       onScroll={this.handleScroll}
       scrollEventThrottle={16}
     >
  
       {/*Spacing*/}
       <View style={{padding: '15%'}}/>
        
         {/*FREE TIME NOTIFICATION TOGGLE*/}
         <View>
           {/*Header*/}
           <Text style={styles.title}>Calendar</Text>
       
           {/*Add Spacing*/}
           <Text style={styles.body}> </Text>
 
           <View>
             <TouchableOpacity onPress={evt => {let { pageY } = evt.nativeEvent;
                 this.setState({freeToggle: !this.state.freeToggle});
                 this.scrollView.scrollTo({y: this.scrollY + pageY, animated: true});
               }}>
               <Text style={styles.body}>Enable/Disable Free Time Notifications</Text>
             </TouchableOpacity>
         </View>
 
         {/*Add Spacing*/}
         <Text style={styles.body}> </Text>
 
 
         {/*Body*/}
         <View
           style={{
           paddingTop: '0%',
           paddingBottom: '0%',
           borderRadius: 4,
           borderWidth: 0.5,
           borderColor: '#d6d7da',
           display: this.state.freeToggle ? 'block' : 'none',
         }}>
        
           <View style={styles.inputContainer}>
          
 
             <Text style={styles.body}>Free Time Start Time:  </Text>
          
             {/*Start time dropdown*/}
             <Picker
               selectedValue={this.state.startTime}
               onValueChange={this.updateStartTime}
               style={{width: 120}} >
               <Picker.Item label="12 AM" value="0" />
               <Picker.Item label="1 AM" value="1" />
               <Picker.Item label="2 AM" value="2" />
               <Picker.Item label="3 AM" value="3" />
               <Picker.Item label="4 AM" value="4" />
               <Picker.Item label="5 AM" value="5" />
               <Picker.Item label="6 AM" value="6" />
               <Picker.Item label="7 AM" value="7" />
               <Picker.Item label="8 AM" value="8" />
               <Picker.Item label="9 AM" value="9" />
               <Picker.Item label="10 AM" value="10" />
               <Picker.Item label="11 AM" value="111" />
               <Picker.Item label="12 PM" value="12" />
               <Picker.Item label="1 PM" value="13" />
               <Picker.Item label="2 PM" value="14" />
               <Picker.Item label="3 PM" value="15" />
               <Picker.Item label="4 PM" value="16" />
               <Picker.Item label="5 PM" value="17" />
               <Picker.Item label="6 PM" value="18" />
               <Picker.Item label="7 PM" value="19" />
               <Picker.Item label="8 PM" value="20" />
               <Picker.Item label="9 PM" value="21" />
               <Picker.Item label="10 PM" value="22" />
               <Picker.Item label="11 PM" value="23" />
             </Picker>
           </View>
 
           <View style={styles.inputContainer}>
             <Text style={styles.body}>Free Time End Time:  </Text>
            
             {/*End time dropdown*/}
             <Picker
               selectedValue={this.state.endTime}
               onValueChange={this.updateEndTime}
               style={{width: 120}} >
               <Picker.Item label="12 AM" value="0" />
               <Picker.Item label="1 AM" value="1" />
               <Picker.Item label="2 AM" value="2" />
               <Picker.Item label="3 AM" value="3" />
               <Picker.Item label="4 AM" value="4" />
               <Picker.Item label="5 AM" value="5" />
               <Picker.Item label="6 AM" value="6" />
               <Picker.Item label="7 AM" value="7" />
               <Picker.Item label="8 AM" value="8" />
               <Picker.Item label="9 AM" value="9" />
               <Picker.Item label="10 AM" value="10" />
               <Picker.Item label="11 AM" value="111" />
               <Picker.Item label="12 PM" value="12" />
               <Picker.Item label="1 PM" value="13" />
               <Picker.Item label="2 PM" value="14" />
               <Picker.Item label="3 PM" value="15" />
               <Picker.Item label="4 PM" value="16" />
               <Picker.Item label="5 PM" value="17" />
               <Picker.Item label="6 PM" value="18" />
               <Picker.Item label="7 PM" value="19" />
               <Picker.Item label="8 PM" value="20" />
               <Picker.Item label="9 PM" value="21" />
               <Picker.Item label="10 PM" value="22" />
               <Picker.Item label="11 PM" value="23" />
             </Picker>
           </View>
 
           <View style={styles.inputContainer}>
             <Text style={styles.body}>Workout Time Needed:  </Text>
 
             {/*Workout time needed dropdown*/}
             <Picker
               selectedValue={this.state.timeNeeded}
               onValueChange={this.updateTimeNeeded}
               style={{width: 170}} >
               <Picker.Item label="30 min" value="30" />
               <Picker.Item label="45 min" value="45" />
               <Picker.Item label="1 hour" value="60" />
               <Picker.Item label="1 hour 15 min" value="75" />
               <Picker.Item label="1 hour 30 min" value="90" />
               <Picker.Item label="1 hour 45 min" value="105" />
               <Picker.Item label="2 hours" value="120" />
               <Picker.Item label="2 hours 15 min" value="130" />
               <Picker.Item label="2 hours 30 min" value="150" />
               <Picker.Item label="2 hours 45 min" value="185" />
               <Picker.Item label="3 hours" value="180" />
             </Picker>
           </View>
         </View>
 
       {/*Space before buttons*/}
       <Text style={styles.body}> </Text>
 
       {/*Save button*/}
       <Button style={[styles.buttonContainer, styles.button]}
         onPress={()=>this.onSaveListener()}
         title="Save"
         color="#00b5ec"
       />
      
       {/*Space between buttons*/}
       <Text style={styles.body}> </Text>
      
       {/*Back button*/}
       <Button style={[styles.buttonContainer, styles.button]}
         onPress={()=>this.onBackListener()}
         title="Back"
         color="#00b5ec"
       />
     </View>
   </ScrollView>
 );
};
render() {
return this.successScreen();
}}
const styles = StyleSheet.create({
title: {
  margin: 5,
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
},
body: {
  fontSize: 16,
  textAlign: 'left',
},
inputContainer: {
  borderBottomColor: 'black',
  backgroundColor: 'white',
  borderBottomWidth: 1,
  width:330,
  height:60,
  flexDirection: 'row',
  alignItems:'center',
},
});
export default CalendarUI;

