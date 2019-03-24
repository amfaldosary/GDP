import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

export default class App extends React.Component {
  state = {
    Fname: '',
    Lname: '',
    email: '',
    Phone: '',
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
              firebase.database().ref('users/').push(
                {
                  Fname: this.state.Fname,
                  Lname: this.state.Lname,
                  Phone: this.state.Phone,
                  email: this.state.email,
                }
              ).then(() => {
                firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(credential => {
            if (credential) {
              console.log('default app user ->', credential.user.toJSON());
              //TODO: Save User to Redux
              //TODO: navigate to Home
              if(this.state.email === 'driver@app.com'){
                this.props.navigation.navigate('Driver')
              }else{
                this.props.navigation.navigate('Home')
              }
            }
          }).catch(function(error) {
            console.log(error);
            //TODO: add alert for errors.
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
             
          });
              });
              
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
          placeholder={"first name"}
          onChangeText={(Fname) => this.setState({ Fname: Fname }) }
        />
        <TextInput
          placeholder={"Lname"}
          onChangeText={(Lname) => this.setState({ Lname: Lname }) }
        />
        <TextInput
          placeholder={"Phone number"}
          onChangeText={(Phone) => this.setState({ Phone: Phone }) }
        />
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