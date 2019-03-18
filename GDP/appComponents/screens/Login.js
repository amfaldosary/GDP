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
        title: 'Login',
    };
    navigateToRegistration = () => {
      this.props.navigation.navigate('Registration')
    };

    navigateToProfail = () => {
      this.props.navigation.navigate('Profail')
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
         
            <Text style={styles.text}>Email</Text>
            <View style={styles.textInput}>
            <TextInput style={styles.textInput}
              placeholder={"Email"}
              onChangeText={(email) => this.setState({ email: email }) }
            /></View><View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.textInput}>
            <TextInput style={styles.textInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password: password })} 
            /></View>
            <View style={styles.M}>
            <View style={styles.button}>
            <MyButton style={styles.textFont} onPress={this.navigateToHome}>Login</MyButton>
            </View>
            <TouchableOpacity  onPress={this.navigateToRegistration}>
              <Text style={styles.textFont}>create new account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToProfail}>
              <Text style={styles.textFont}>Profail</Text>
            </TouchableOpacity>
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
      marginTop:30, 
      fontWeight: 'bold',
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

textFont: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 20,
  alignSelf: 'center',
},

M:{
  marginTop:40,
},
});