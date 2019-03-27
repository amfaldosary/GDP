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
            onPress={() => alert('ما سويناه للحين')}
            title="Profile"
            color="#000"
          />
        ),
    };
    navigateToService = () => {
      this.props.navigation.navigate('Service')
    };
    emergency = () => {
      firebase.database().ref('order/').set({
        user_id: '',
        PICKUP_long: JSON.stringify(position.coords.longitude),
        PICKUP_lat: '',

      }).then(() => { });
    };
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          followsUserLocation
          showsUserLocation>
          <View>
            <MyButton onPress={this.navigateToService}>Service</MyButton>
            <MyButton onPress={this.emergency}>Emergency</MyButton>
          </View>
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