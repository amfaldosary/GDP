import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './appComponents/navigation/navigator';

import firebase from './Firebase';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
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
