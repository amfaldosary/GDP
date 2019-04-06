import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , ScrollView} from 'react-native';

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

        <Text style={styles.text1}>First Name </Text>
        <TextInput
          placeholder={"Your First Name"}
          onChangeText={(Fname) => this.setState({ Fname: Fname }) }
        />
        <Text style={styles.text1}>Last Name </Text>
        <TextInput
          placeholder={"Your Last Name"}
          onChangeText={(Lname) => this.setState({ Lname: Lname }) }
        />
        <Text style={styles.text1}>Phone Number </Text>
        <TextInput
          placeholder={"Your Phone Number"}
          onChangeText={(Phone) => this.setState({ Phone: Phone }) }
        />
        <Text style={styles.text1}>Email </Text>
        <TextInput
          placeholder={"Your Email"}
          onChangeText={(email) => this.setState({ email: email }) }
        />
          <Text style={styles.text1}>Password</Text>
        <TextInput
          placeholder={"Your Password"}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })} 
        />
        <Text style={styles.text1}>Confirm Password </Text>
        <TextInput
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          onChangeText={(password2) => this.setState({ password2: password2 })} 
        />
        <Button onPress={this.navigateToHome}>Register</Button>


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
    paddingTop: 5,
    alignSelf: 'center',
  },
  text1: {
    left:75,
    fontSize: 18,
    color:'#fff'

 },
});