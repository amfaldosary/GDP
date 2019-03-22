import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';

import firebase from '../../Firebase';

class Greeting extends React.Component {
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}!</Text>
        </View>
      );
    }
  }
export default class App extends React.Component {
    state = {
        value1: '',
        value2: '',
        value3: '',
    }
    load = () => {
        firebase.database().ref('location/hospital/001/name').once('value' ,function (snapshot){
             console.log('###############');
             console.log(snapshot.val());
            //return (data.toJSON);
            let value5= snapshot.val();
            //this.state.value1 = (snapshot.val());
        })
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Greeting name={this.value5} />
                <Button onPress={this.load} title={'yes'} />
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