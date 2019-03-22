import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Service from '../screens/Service';
import Driver from '../screens/Driver';
import Hospitals from '../screens/Hospitals';

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Registration: { screen: Registration },
    Service: { screen: Service },
    Driver: { screen: Driver },
    Hospitals: { screen: Hospitals },
  });
  
  export default createAppContainer(AppNavigator);