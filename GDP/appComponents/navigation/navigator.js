import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';

const AppNavigator = createStackNavigator({
    Login: { screen: Login }
  });
  
  export default createAppContainer(AppNavigator);