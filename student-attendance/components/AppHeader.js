import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends Component{
  render(){
    return(

      <View style={styles.textConatiner}>
      <Text style={styles.text}>STUDENT ATTENDANCE</Text>
      </View>

    )
  }
}

const styles=StyleSheet.create({
  textConatiner: {
    backgroundColor:'#acddde'
  },
  text:{
    color:'black',
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center'
  }
})

export default AppHeader;