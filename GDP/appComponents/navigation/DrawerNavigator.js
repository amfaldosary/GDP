import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import '../navigation/navigator';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Service from '../screens/Service';
import Driver from '../screens/Driver';
import Hospitals from '../screens/Hospitals';
import Clinics from '../screens/Clinics';
import Pharmacy from '../screens/Pharmacy';
import Welcome from '../screens/Welcome';
import Rate from '../screens/Rate';
import Help from '../screens/Help';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Login: { screen: Login },
		Welcome: {screen: Welcome},
		Home: { screen: Home },
		Registration: { screen: Registration },
		Help:{screen: Help},
		Service: { screen: Service },
		Driver: { screen: Driver },
		Hospitals: { screen: Hospitals },
		Clinics: { screen: Clinics },
		Pharmacy: { screen: Pharmacy },
		Rate: {screen: Rate},}
);

export default createAppContainer(DrawerNavigator);