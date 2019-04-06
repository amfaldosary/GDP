import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'
import { Constants, Location, Permissions } from 'expo';
import {connect} from 'react-redux';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

class Home extends React.Component {
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
    navigateToProfile = () => {
      this.props.navigation.navigate('Service')
    };
    navigateToService = () => {
      this.props.navigation.navigate('Service')
    };
    emergency = () => {
      firebase.database().ref('order/from/').set({
        user_id: '',
        PICKUP_long: '',
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

  componentDidMount() {
    console.log('Component did mount');
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try{
      navigator.geolocation.getCurrentPosition((location)=> {
        firebase.database().ref('order/001/').set({
          user_id: this.props.user.email,
          Destination: 'customer location',
          PICKUP_long: location.coords.longitude,
          PICKUP_lat: location.coords.latitude,
        }).then(() => {
          console.log('####### passed');
        });
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
      },(error)=>{
        console.log(error);
      });
    } catch(e){
      console.log(e.message);
    }
  
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


const mapStateToProps = state => {
  console.log(state);
  return {user: state.user};
}

export default connect(mapStateToProps)(Home);