import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  };
    static navigationOptions = {
        title: 'Service',
    };
    navigateToHospitals = () => {
      this.props.navigation.navigate('Hospitals')
    };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.spa}>
        <MyButton style={styles.Bu} onPress={this.navigateToHospitals}>Hospital</MyButton>
      </View> 
      <View style={styles.spa}>
        <MyButton style={styles.Bu}>Clinic</MyButton>
     </View>
     <View style={styles.spa}>
         <MyButton style={styles.Bu}>Pharmacy</MyButton>
     </View>
     <View style={styles.spa}>
            <MyButton style={styles.Bu}>Other</MyButton>
      </View>
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
    alignItems: 'stretch',
  },
  Bu: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  text: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  spa: {
    marginTop: 20,
  }
});
