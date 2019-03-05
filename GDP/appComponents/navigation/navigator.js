import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Registration: { screen: Registration },
  });
  
  export default createAppContainer(AppNavigator);