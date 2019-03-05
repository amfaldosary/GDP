import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import Home from '../screens/Home';

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home }
  });
  
  export default createAppContainer(AppNavigator);