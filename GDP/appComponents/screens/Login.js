import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';


export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  };
    static navigationOptions = {
        title: 'Login',
    };
    navigateToHome = () => {
            // this.state.email, this.state.password
            
          firebase.auth().signInWithEmailAndPassword('aa@aa.aa','123456')
          .then(credential => {
            if (credential) {
              console.log('default app user ->', credential.user.toJSON());
              //TODO: Save User to Redux
              //TODO: navigate to Home
              this.props.navigation.navigate('Home')
            }
          }).catch(function(error) {
            console.log(error);
            //TODO: add alert for errors.
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });






    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}></Text>
        <TextInput
          placeholder={"Email"}
          onChangeText={(email) => this.setState({ email: email }) }
        />
        <TextInput
          placeholder={"Password"}
          onChangeText={(password) => this.setState({ password: password })} 
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