import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';
import HomeScreen from './HomeScreen';

export default class StatusScreen extends Component {
  componentDidMount() {
    var status2;
    var status = db.ref('kevin/' + '/');
    var status1 = db.ref('kevin/status').on('value', (data) => {
      status2 = data.val();
      this.setState({ kevin: status2 });
    });

    var xyz2;
    var xyz = db.ref('mike/' + '/');
    var xyz1 = db.ref('mike/status').on('value', (data) => {
      xyz2 = data.val();
      this.setState({ mike: xyz2 });
    });

    var kkk2;
    var kkk = db.ref('emma/' + '/');
    var kkk1 = db.ref('emma/status').on('value', (data) => {
      kkk2 = data.val();
      this.setState({ emma: kkk2 });
    });

    var abc2;
    var abc = db.ref('sammy/' + '/');
    var abc1 = db.ref('sammy/status').on('value', (data) => {
      abc2 = data.val();
      this.setState({ sammy: abc2 });
    });

    var jjj2;
    var jjj = db.ref('kevin/' + '/');
    var jjj1 = db.ref('kevin/date').on('value', (data) => {
      jjj2 = data.val();
      this.setState({ kdate: jjj2 });
    });

    var fff2;
    var fff = db.ref('mike/' + '/');
    var fff1 = db.ref('mike/date').on('value', (data) => {
      fff2 = data.val();
      this.setState({ mdate: fff2 });
    });

    var ggg2;
    var ggg = db.ref('sammy/' + '/');
    var ggg1 = db.ref('sammy/date').on('value', (data) => {
      ggg2 = data.val();
      this.setState({ sdate: ggg2 });
    });

    var lll2;
    var lll = db.ref('emma/' + '/');
    var lll1 = db.ref('emma/date').on('value', (data) => {
      lll2 = data.val();
      this.setState({ edate: lll2 });
    });
  }
  constructor() {
    super();
    var status2;
    var status = db.ref('kevin/' + '/');
    var status1 = db.ref('kevin/status').on('value', (data) => {
      status2 = data.val();
      this.setState({ kevin: status2 });
    });

    var xyz2;
    var xyz = db.ref('mike/' + '/');
    var xyz1 = db.ref('mike/status').on('value', (data) => {
      xyz2 = data.val();
      this.setState({ mike: xyz2 });
    });

    var kkk2;
    var kkk = db.ref('mike/' + '/');
    var kkk1 = db.ref('mike/status').on('value', (data) => {
      kkk2 = data.val();
      this.setState({ emma: kkk2 });
    });

    var abc2;
    var abc = db.ref('sammy/' + '/');
    var abc1 = db.ref('sammy/status').on('value', (data) => {
      abc2 = data.val();
      this.setState({ sammy: abc2 });
    });

    var jjj2;
    var jjj = db.ref('kevin/' + '/');
    var jjj1 = db.ref('kevin/date').on('value', (data) => {
      jjj2 = data.val();
      this.setState({ kdate: jjj2 });
    });

    var fff2;
    var fff = db.ref('mike/' + '/');
    var fff1 = db.ref('mike/date').on('value', (data) => {
      fff2 = data.val();
      this.setState({ mdate: fff2 });
    });

    var ggg2;
    var ggg = db.ref('sammy/' + '/');
    var ggg1 = db.ref('sammy/date').on('value', (data) => {
      ggg2 = data.val();
      this.setState({ sdate: ggg2 });
    });

    var lll2;
    var lll = db.ref('emma/' + '/');
    var lll1 = db.ref('emma/date').on('value', (data) => {
      lll2 = data.val();
      this.setState({ edate: lll2 });
    });

    this.state = {
      kevin: 'null',
      kdate: 'null',
      emma: 'null',
      edate: 'null',
      mdate: 'null',
      mike: 'null',
      sdate: 'null',
      sammy: 'null',
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          disabled="true"
          style={{
            backgroundColor: 'red',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 0,
            color: 'white',
          }}>
          {' '}
          1: Sam: {this.state.sammy} ({this.state.sdate}){' '}
        </TouchableOpacity>

        <TouchableOpacity
          disabled="true"
          style={{
            backgroundColor: 'purple',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 50,
            color: 'white',
          }}>
          {' '}
          2: Kevin: {this.state.kevin} ({this.state.kdate}){' '}
        </TouchableOpacity>

        <TouchableOpacity
          disabled="true"
          style={{
            backgroundColor: 'green',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 50,
            color: 'white',
          }}>
          {' '}
          3: Mike: {this.state.mike} ({this.state.mdate}){' '}
        </TouchableOpacity>

        <TouchableOpacity
          disabled="true"
          style={{
            backgroundColor: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 50,
            color: 'white',
          }}>
          {' '}
          4: Emma: {this.state.emma} ({this.state.edate}){' '}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            borderRadius: 100,
            marginTop: 80,
            width: 130,
            height: 130,
            fontSize: 24,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'orange',
          }}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#008b8b',
            }}>
            {' '}
            Home Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
