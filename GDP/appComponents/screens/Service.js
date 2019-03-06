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
    navigateToRegistration = () => {
      this.props.navigation.navigate('Registration')
    };
  render() {
    return (
      <View style={styles.container}>
            <MyButton style={styles.Bu}>Hospital</MyButton>
            <MyButton style={styles.Bu}>Clinic</MyButton>
            <MyButton style={styles.Bu}>Pharmacy</MyButton>
            <MyButton style={styles.Bu}>Other</MyButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff',
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
});