import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './appComponents/navigation/navigator';

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
