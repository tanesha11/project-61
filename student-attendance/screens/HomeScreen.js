import React, { Component } from 'react';
import { Button, View, Text, Alert,TouchableOpacity, StyleSheet, Image} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config';

export default class HomeScreen extends Component{

  constructor(){
    super();
    this.state={
      
    }
  }

sabsent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy

db.ref('sammy/' + '/').update({
status: 'a',
date:today
})
}

kabsent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy

db.ref('kevin/' + '/').update({
status: 'a',
date:today
})
}

mabsent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy

db.ref('mike/' + '/').update({
status: 'a',
date:today
})
}


eabsent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy

db.ref('emma/' + '/').update({
status: 'a',
date:today
})
}

spresent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy
db.ref('sammy/' + '/').update({
status: 'p',
date: today
})
}

kpresent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy
db.ref('kevin/' + '/').update({
status: 'p',
date: today
})
}

mpresent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy
db.ref('mike/' + '/').update({
status: 'p',
date: today
})
}


epresent(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
dd = '0' + dd;
}
if (mm < 10) {
mm = '6' + mm;
}
today= dd+'-'+mm+'-'+yyyy
db.ref('emma/' + '/').update({
status: 'p',
date: today
})
}


  render(){
    return(
      <View>

      <AppHeader/>
      
      <TouchableOpacity
      style={[styles.button, {backgroundColor:"red"}]}
      onPress={()=>this.sabsent()}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={[styles.button2,{marginTop:-40}, {backgroundColor:"green"}]}
      onPress={()=>this.spresent()}>
      <Text style={styles.buttonText}>Present</Text>
      </TouchableOpacity>
      <Text style={styles.likeText}>1: Sam</Text>
      <TouchableOpacity
      style={[styles.button, {backgroundColor:"red"}]}
      onPress={()=>this.kabsent()}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button2,{marginTop:-40}, {backgroundColor:"green"}]}
      onPress={()=>this.kpresent()}>
      <Text style={styles.buttonText}>Present</Text>
      </TouchableOpacity>
<Text style={styles.likeText}>2: Kevin</Text>
      <TouchableOpacity
      style={[styles.button, {backgroundColor:"red"}]}
      onPress={()=>this.mabsent()}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button2,{marginTop:-40}, {backgroundColor:"green"}]}
      onPress={()=>this.mpresent()}>
      <Text style={styles.buttonText}>Present</Text>
      </TouchableOpacity>
<Text style={styles.likeText}>3: Mike</Text>
      <TouchableOpacity
      style={[styles.button, {backgroundColor:"red"}]}
      onPress={()=>this.eabsent()}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button2,{marginTop:-40}, {backgroundColor:"green"}]}
      onPress={()=>this.epresent()}>
      <Text style={styles.buttonText}>Present</Text>
      </TouchableOpacity>
<Text style={styles.likeText}>4: Emma</Text>
      <TouchableOpacity
      style={{width: 200,backgroundColor:'red', marginTop:80,                  marginLeft:80, textAlign:'center', height:40,                           justifyContent:'center',
       borderRadius:20,
       borderWidth:2,
       margin:'center'
      }}
      onPress={()=>this.props.navigation.navigate('StatusScreen')}
      >
      <Text style={{color:'white'}}>Summary Screen</Text> 
      </TouchableOpacity>

      
      

      <Text style= {styles.likeText} >
      {this.state.dislike1}
      </Text>

      <Text style= {styles.dislikeText} >
      {this.state.like1}
      </Text>
      </View>

    )
  }
}

const styles=StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignSelf:'center',
    marginLeft: 220,
    borderWidth: 2,
    borderRadius: 8,
    marginTop:50,
    width:100,
    height: 40
  },
  button2:{
    justifyContent: 'center',
    alignSelf:'center',
    marginLeft: 15,
    borderWidth: 2,
    borderRadius: 8,
    
    width:100,
    height: 40
  },
  buttonText: {
    textAlign:'center',
    color: 'white'
  },
  likeText: {
    textAlign:'center',
    color: 'white',
    marginLeft: -200,
    marginTop: -35,
    fontWeight:'bold',
    fontSize:20
  },
  dislikeText: {
    textAlign:'center',
    color: 'black',
    marginLeft: 150,
    marginTop: -19
  },
})



