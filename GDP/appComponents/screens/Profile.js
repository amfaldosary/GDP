import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import MyButton from '../components/Button';
import TextInput from '../components/TextInput';
import firebase from '../../Firebase';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
  render() {
    console.log("=====Current User=====");
    console.log(this.props.user);
    console.log("==========");
    return (
      <View style={styles.container}>
        <Text>{this.props.user.phoneNumber}</Text>
        <Text>{this.props.user.photoURL}</Text>
        <Text>{this.props.user.displayName}</Text>
        <Text>{this.props.user.email}</Text>
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
  Bu: {
    paddingBottom: 12,
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