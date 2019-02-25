import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}></Text>
        <TextInput
          placeholder={"Email"}
        />
        <TextInput
          placeholder={"Password"}
        />
        <Button>Login</Button>
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
  text: {
    alignSelf: 'center',
  },
});