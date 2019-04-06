import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import firebase from '../../Firebase';
import MyButton from '../components/Button';

class Driver extends React.Component {
  static navigationOptions = {
    title: 'Orders',
    headerLeft: (
      <View></View>
    ),
};
    constructor(props) {
      super(props);
          global.PickupLat = 0;
          global.PickupLong = 0;
          global.PickupDestination = '';
          global.PickupUser = '';
          global.Lat = 0;
          global.Long = 0;
          global.Destination = '';
          global.User = '';

      this.renderListItem = (item) => {
        //console.log('################## renderListItem')
        if(item.Destination === 'customer location'){
          global.PickupLat = item.PICKUP_lat;
          global.PickupLong = item.PICKUP_long;
          global.PickupDestination = item.Destination;
          global.PickupUser = item.user_id;
        }else{
          global.Lat = item.PICKUP_lat;
          global.Long = item.PICKUP_long;
          global.Destination = item.Destination;
          global.User = item.user_id;
        }
  
        return (
          <View>
            <MyButton onPress={this.navigateToDriverMap}>{global.Destination}</MyButton>
          </View>
        )
      };
      this.state = {
        Clinics: [],
        loaded: false
      };

      //this.getValue()
    }
    navigateToDriverMap = () => {
      this.props.navigation.navigate('DriverMap')
    };
    getValue = () => {
      firebase.database().ref('order/').once('value')
      .then((snapshot) => {
      var ClinicsArray = [];
  
       snapshot.forEach((item) => {
        ClinicsArray.push(item.val())
         });
         this.setState({Clinics: ClinicsArray, loaded: true})
       })
       .catch(error => console.log('#####################', error))
    };

    

    passingToOrder = (item) => {
      firebase.database().ref('order/001').set({
        user_id: this.props.user.email,
        Destination: item.name,
        PICKUP_long: item.long,
        PICKUP_lat: item.lat,
      }).then(() => {
        console.log('####### passed');
      });
    };

  componentDidMount() {
    console.log('Component did mount');
    this.getValue();
  }
    render() {
      console.log('############# test global ',global.PickupLat);
        return (
            <ScrollView style={styles.container}>
                <FlatList
                  data={this.state.Clinics}
                  renderItem={({item}) => this.renderListItem(item)}
                  keyExtractor={(item, index) => item.name}
                />
            </ScrollView>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eff',
    },
    text: {
      paddingTop: 5,
      alignSelf: 'center',
    },
  });


  const mapStateToProps = state => {
    console.log(state);
    return {user: state.user};
  }
  
  export default connect(mapStateToProps)(Driver);