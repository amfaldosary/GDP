import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './appComponents/navigation/navigator';
import DrawerNavigator from './appComponents/navigation/DrawerNavigator';
import firebase from './Firebase';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';


export default class App extends React.Component {
  render() {
    return (
<DrawerNavigator/>


    
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
