import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// -------
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Service from '../screens/Service';
import Driver from './Driver';
import Hospitals from '../screens/Hospitals';
import Clinics from '../screens/Clinics';
import Pharmacy from '../screens/Pharmacy';
import Welcome from '../screens/Welcome';
import Rate from '../screens/Rate';
import Help from '../screens/Help';
// -------
import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

class Login extends React.Component {
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

    navigateToWelcome = () => {
            // this.state.email, this.state.password
            // 'aa@aa.aa', '123456'
          firebase.auth().signInWithEmailAndPassword('aa@aa.aa', '123456')
          .then(credential => {
            if (credential) {
              console.log('default app user ->', credential.user.toJSON());
              //TODO: Save User to Redux
              //TODO: navigate to Home
              if(this.state.email === 'driver@app.com'){
                this.props.navigation.navigate('Driver')
              }else{
                this.props.navigation.navigate('Welcome')
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
              placeholder={"Enter Yuor Email"}
              onChangeText={(email) => this.setState({ email: email }) }
            />
             <Text style={styles.text1}>Password</Text>
            <TextInput
              placeholder={"Enter Your Password"}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password: password })} 
            />
            <MyButton onPress={this.navigateToWelcome}>Login</MyButton>
            <TouchableOpacity onPress={this.navigateToRegistration}>
              <Text style={styles.text}>create new account</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Welcome: {screen: Welcome},
  Home: { screen: Home },
  Registration: { screen: Registration },
  Help:{screen: Help},
  Service: { screen: Service },
  Driver: { screen: Driver },
  Hospitals: { screen: Hospitals },
  Clinics: { screen: Clinics },
  Pharmacy: { screen: Pharmacy },
  Rate: {screen: Rate},
},

);

export default AppNavigator;



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
    //fontWeight:'bold',
    fontSize:18,
    left:10
  },
  text1:{
    left:75,
    fontSize:22,
    color: '#fff'
  },

  button:{
    alignItems:'center',
    backgroundColor:'#67befd',
    padding:30,
    marginHorizontal:10,
    borderWidth:1,
    borderRadius:12,
    marginTop:100,
    left:1,
  },
});

