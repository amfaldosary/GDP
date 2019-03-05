import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',

    };
    navigateToHome = () => {
      this.props.navigation.navigate('Home')
    };
  render() {
    // // firebase
    // let placesRef = firebase.database().ref("places/");
    // console.log("#####");
    // console.log(placesRef);
    // console.log("#####");
    // placesRef.once("value").then(function(snapshot) {
    //   var key = snapshot
    //   console.log(key);
    // });
    return (
      <MapView style={{flex: 1}}
        followsUserLocation
        showsUserLocation
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    alignSelf: 'center',
  },
});