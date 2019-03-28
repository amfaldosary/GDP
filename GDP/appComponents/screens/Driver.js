import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
  static navigationOptions = (context)=> ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => context.navigation.navigate("Profile") }
        title="Profile"
        color="#000"
      />
    ),
    headerLeft: (
      <View></View>
    ),
});
    navigateToService = () => {
      this.props.navigation.navigate('Service')
    };
    emergency = () => {
      firebase.database().ref('order/').once('value' ,function (snapshot){
        alert(snapshot.val());
        console.log(snapshot.val());
      }).then(() => {
        firebase.database().ref('order/').remove();
      });
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
          <MyButton onPress={this.emergency}>refresh</MyButton>
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    alignSelf: 'center',
  },
});