import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
 
const Login = createStackNavigator({
  Login: LoginScreen, 
},{   
  headerMode: 'none',
});

Login.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const Home = createStackNavigator({
  Home: HomeScreen,
},{   
  headerMode: 'none',
});

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createStackNavigator({
  LoginScreen,
  Home
});
