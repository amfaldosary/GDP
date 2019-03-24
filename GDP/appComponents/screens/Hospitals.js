import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import firebase from '../../Firebase';

export default class App extends React.Component {
    state = {
        value1: 'hey',
        value2: '',
        value3: '',
    };
    
    render() {
        firebase.database().ref('location/hospital/001/name').once('value' ,function (snapshot){
            console.log('###############');
            console.log(snapshot.val());
           //return (data.toJSON);
           //const value5= snapshot.val();
           //this.state.value1 = (snapshot.val());
           
       });
       
        return (
            <ScrollView style={styles.container}>
                <Text>this is {this.state.value1}</Text>
                
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