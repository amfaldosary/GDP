import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './appComponents/navigation/navigator';
import {Provider} from 'react-redux' 
import firebase from './Firebase';
import store from './appComponents/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
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
