import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {login} from '../redux/actions';
import {connect} from 'react-redux';
import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';



class LogIn extends React.Component {
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
          // firebase.auth().signInWithEmailAndPassword('aa@aa.aa', '123456')
          // .then(credential => {
          //   if (credential) {
          //     console.log('default app user ->', credential.user.toJSON());
          //     //TODO: Save User to Redux
          //     //TODO: navigate to Home
          //     if(this.state.email === 'driver@app.com'){
          //       this.props.navigation.navigate('Driver')
          //     }else{
          //       this.props.navigation.navigate('Home')
          //     }
          //   }
          // }).catch(function(error) {
          //   console.log(error);
          //   //TODO: add alert for errors.
          //   // Handle Errors here.
          //   var errorCode = error.code;
          //   var errorMessage = error.message;
          //   alert(error.message);
             
          // });

          this.props.onLogin(this.state.email, this.state.password).then(res => {
            console.log("logIn");
            console.log(res);
            if(res){
              if(res.email === 'driver@app.com'){
                this.props.navigation.navigate('Driver')
              }else{
                this.props.navigation.navigate('Home')
              }
            }
          });
    };
  render() {
    return (
      <View style={styles.container}>
         <View> 
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
            <MyButton onPress={this.navigateToHome}>Login</MyButton>
            <TouchableOpacity onPress={this.navigateToRegistration}>
              <Text style={styles.text}>create new account</Text>
            </TouchableOpacity>
          </View>
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

const mapDispatchToProps = dispatch => ({
  onLogin: (email, password)=> {
    return dispatch(login(email, password));
  }
});

const mapStateToProps = (state)=> {
  return {user: state.user};
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);