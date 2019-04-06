import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown'

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    state = {
      display_Name: this.props.user.displayName,
      email: this.props.user.email,
      phone_Number: this.props.user.phoneNumber,
    }
    update = () => {
      var user = firebase.auth().currentUser;

              user.updateProfile({
                displayName: this.state.display_Name,
                phoneNumber: this.state.phone_Number
              }).then(function() {
                // Update successful.
                alert('updated user data');
              }, function(error) {
                alert(error)
              })
    };
  render() {
    console.log("=====Current User=====");
    console.log(this.props.user.phoneNumber);
    console.log("==========");
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.user.uid}</Text> */}
        {/* <Text>{this.props.user.photoURL}</Text> */}
        <TextInput
          placeholder={this.props.user.displayName}
          onChangeText={(display_Name) => this.setState({ display_Name: display_Name }) }
        />
        <TextInput
          placeholder={this.props.user.email}
          onChangeText={(email) => this.setState({ email: email }) }
        />
        {/* <TextInput
          placeholder={this.props.user.phoneNumber}
          onChangeText={(phone_Number) => this.setState({ phone_Number: phone_Number }) }
        /> */}
        <ModalDropdown 
        style={styles.Bu}
        options = {['visual disability','hearing disability','movement disability']}/>
        <MyButton onPress={this.update}>Update</MyButton>
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
  drop: {
    
  },
  Bu: {

    fontSize: 25,
    paddingBottom: 24,
    paddingTop: 12,
  },
  text: {
    paddingTop: 5,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  console.log(state);
  return {user: state.user};
}

export default connect(mapStateToProps)(Profile);