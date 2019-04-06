import React from 'react';
import { StyleSheet, Text, View, Button , TouchableOpacity} from 'react-native';
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


          </View>
        </MapView>

        <View style={styles.spa}>
        <View style = {styles.con2}>
          <TouchableOpacity onPress={this.navigateToService}
            style={styles.but} >
             <View >
               <Text style={styles.text}>Service</Text>
             </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={this.emergency}
            style={styles.but} >
             <View >
               <Text style={styles.text}>Emergency</Text>
             </View>

        </TouchableOpacity>
        </View>
        </View>
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
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
  
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
  },
  but: {
    backgroundColor: '#964d4d',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

    //marginTop: 400,
    //left:100,
    width:300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
  },
  con2:{
    flexDirection: 'column'
},
spa:{
  marginTop: 450,
}
});