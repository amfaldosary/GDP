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
            // ...
          });}
          else{
            alert("password doesn't match");
          }
    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <View style={styles.textInput}>
        <TextInput
          placeholder={"Email"}
          onChangeText={(email) => this.setState({ email: email }) }
        /></View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.textInput}>
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })} 
        /></View>
        <Text style={styles.text}>Confirm Password</Text>
        <View style={styles.textInput}>
        <TextInput
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          onChangeText={(password2) => this.setState({ password2: password2 })} 
        /></View>
        <View style={styles.M}>
        <View style={styles.button}>
        <Button onPress={this.navigateToHome}>Register</Button>
        </View>
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
  text: {
    //paddingTop: 0,
      //alignSelf: 'center',
      width: '100%',
      fontSize: 35,
      color: '#fff',
      marginHorizontal:10,
      marginTop:10, 
      fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#979797',
    //marginTop: 10,
    //height: 35,
    //marginHorizontal: 10,
    borderRadius: 12,
    width:250,
    alignSelf: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 44,
    width: 340,
    //borderColor: 'gray',
    //borderWidth: 1,
    marginHorizontal:10,
    //marginBottom: 15,
    borderRadius: 12,
    marginTop:30,
},
M:{
  marginTop:40,
},
});