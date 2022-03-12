import React,{ Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import StatusScreen from './screens/StatusScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';



export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:"#800020", flex:1}}>
      
        
        <AppContainer/>
        
      
      </View>
    );
  }
}

var AppNavigator=createSwitchNavigator({
  HomeScreen: HomeScreen,
  StatusScreen: StatusScreen
})

var AppContainer=createAppContainer(AppNavigator);
