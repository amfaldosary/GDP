import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

    navigateToHome = () => {
            // this.state.email, this.state.password
            // 'aa@aa.aa', '123456'
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
    };
  render() {
    return (
      <View style={styles.container}>

         <View> 
            <Text style={styles.text1}>Email</Text>
            <TextInput
              placeholder={"Enter Your Email"}
              onChangeText={(email) => this.setState({ email: email }) }
            />
               <Text style={styles.text1}>Password</Text>
            <TextInput
              placeholder={"Enter Your Password"}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password: password })} 
            />
            <MyButton onPress={this.navigateToHome}>Login</MyButton>
            <TouchableOpacity onPress={this.navigateToRegistration}>
              <Text style={styles.text}>create new account</Text>
            </TouchableOpacity>
            <Ionicons name ="md-checkmark-circle" size={30} />
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
    paddingTop: 5,
    alignSelf: 'center',
  },
  text1: {
     left:75,
     fontSize: 22,
     color:'#fff'

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#67BEFD',
    padding: 30,
    marginHorizontal: 10,
    borderWidth:1,
    borderRadius:12,
    marginTop: 100,
    left: 1  
},
});