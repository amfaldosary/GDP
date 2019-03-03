import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  };
    static navigationOptions = {
        title: 'Login',
    };
    navigateToHome = () => {
      this.props.navigation.navigate('Home')
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
        <Button onPress={this.navigateToHome}>Login</Button>
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