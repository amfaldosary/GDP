import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Login!</Text>
      </View>
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