import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'
import { Constants, Location, Permissions } from 'expo';
import {connect} from 'react-redux';
import getDirections from 'react-native-google-maps-directions';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

class DriverMap extends React.Component {
  static navigationOptions = (context)=> ({
    title: 'Driver',
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
constructor(props) {
    super(props);
    this.state = {
        PickupLat: global.PickupLat,
        PickupLong: global.PickupLong,
        PickupDestination: global.PickupDestination,
        PickupUser: global.PickupUser,
        Lat: global.Lat,
        Long: global.Long,
        Destination: global.Destination,
        User: global.User,

    };
}
handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
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
    done = () => {
        firebase.database().ref('done/').set({
            use: 's',
    
          }).then(() => { this.props.navigation.navigate('Driver') });
    };
  render() {
    console.log('############# test global ',global.PickupLat);
    return (
      <View style={styles.container}>
        <MapView 
            style={styles.map}
            showsUserLocation>
          <MapView.Marker
            onPress={this.handleGetDirections}
            coordinate={{
              latitude: this.state.PickupLat,
              longitude: this.state.PickupLong,
            }}
            title={this.state.PickupDestination}
            description={this.state.PickupUser}/>
            <MapView.Marker
            onPress={this.handleGetDirections}
            coordinate={{
              latitude: this.state.Lat,
              longitude: this.state.Long,
            }}
            title={this.state.Destination}
            description={this.state.User}/>
            
            <MyButton onPress={this.done}>Done</MyButton>
        </MapView>
      </View>
    );
  }

//   componentDidMount() {
//     console.log('Component did mount');
//     this.getCurrentPosition();
//   }

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

export default connect(mapStateToProps)(DriverMap);