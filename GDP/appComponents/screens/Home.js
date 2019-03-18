import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',

        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Profile"
            color="#000"
          />
        )
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
          
        
            <MyButton style={styles.button1}> Service</MyButton>
            
            
            <MyButton style={styles.button2} >Emergency</MyButton>
           
           </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    position: 'absolute',
    bottom: '11%',
    width: '90%',
   
  },
  button2: {
    position: 'absolute',
    bottom: '5%',
    width: '90%',
  },

  button: {
    flex:1,
    color:'#fff',
    position: 'absolute',
    borderRadius: 12,
    bottom: 50,
    width: '90%',
    
  },
  ServiceButton: {
    backgroundColor: '#964d4d',
    position: 'absolute',
    borderRadius: 12,
    bottom: '11%',
    width: '90%',
  },
  EmergencyButton: {
    backgroundColor: '#964d4d',
    position: 'absolute',
    borderRadius: 12,
    bottom: '5%',
    width: '90%',
  },
});