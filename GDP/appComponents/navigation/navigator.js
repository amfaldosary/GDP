import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Service from '../screens/Service';
import Driver from '../screens/Driver';
import Hospitals from '../screens/Hospitals';
import Clinics from '../screens/Clinics';
import Pharmacy from '../screens/Pharmacy';
import Profile from '../screens/Profile';
import DriverMap from '../screens/DriverMap';

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Registration: { screen: Registration },
    Service: { screen: Service },
    Driver: { screen: Driver },
    Hospitals: { screen: Hospitals },
    Clinics: { screen: Clinics },
    Pharmacy: { screen: Pharmacy },
    Profile: { screen: Profile },
    DriverMap: { screen: DriverMap },
    
  });
  
  export default createAppContainer(AppNavigator);