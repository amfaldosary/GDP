import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import firebase from '../../Firebase';
import MyButton from '../components/Button';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Clinics',
};
    constructor(props) {
      super(props);
      this.state = {
        Clinics: [],
        loaded: false
      };

      this.getValue()
    }
    getValue = () => {
      firebase.database().ref('location/clinic/').once('value')
      .then((snapshot) => {
      var ClinicsArray = [];
  
       snapshot.forEach((item) => {
        ClinicsArray.push(item.val())
         });
         this.setState({Clinics: ClinicsArray, loaded: true})
       })
       .catch(error => console.log('#####################', error))
    };

    renderListItem = (item) => {
      console.log('################## MHA ITEM', item)
      return (
        <View>
          <MyButton onPress={this.passingToOrder(item)}>{item.name}</MyButton>
        </View>
      )
    };

    passingToOrder = (item) => {
      firebase.database().ref('order/').set({
        user_id: '',
        Destination: item.name,
        PICKUP_long: item.long,
        PICKUP_lat: item.lat,
      }).then(() => {
        console.log('####### passed');
      });
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                  data={this.state.Clinics}
                  renderItem={({item}) => this.renderListItem(item)}
                  keyExtractor={(item, index) => item.name}
                />
            </View>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#964d4d',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',},
    text: {
      paddingTop: 5,
      alignSelf: 'center',
    },
  });