import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';


export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    password2: '',
  };
    static navigationOptions = {
        title: 'Registration',
    };
    navigateToHome = () => {
            // this.state.email, this.state.password
        if(this.state.password === this.state.password2){
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(credential => {
            if (credential) {
              console.log('default app user ->', credential.user.toJSON());
              //TODO: Save User to Redux
              //TODO: navigate to Home
              this.props.navigation.navigate('Login')
            }
          }).catch(function(error) {
            console.log(error);
            //TODO: add alert for errors.
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
            // ...
          });}
          else{
            alert("Password doesn't match");
          }
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
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })} 
        />
        <TextInput
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          onChangeText={(password2) => this.setState({ password2: password2 })} 
        />
        <Button onPress={this.navigateToHome}>register</Button>
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
    paddingTop: 5,
    alignSelf: 'center',
  },
});