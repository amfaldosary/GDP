import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

import MyButton from '../components/Button';
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
      <View style={styles.container}>
        <MapView style={styles.map}
          followsUserLocation
          showsUserLocation>
          <View style={styles.button1}>
            <MyButton>Service</MyButton>
            <MyButton>Emergency</MyButton>
          </View>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    alignSelf: 'center',
  },
  button1: {
    flex: 2,
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  },
  button2: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
  }
});