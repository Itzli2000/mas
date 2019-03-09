import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../screens/LoginScreen/containers';
import HomeScreen from './../screens/Home/containers';

const NoAuthRoutes = createStackNavigator({
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

const Routes = createAppContainer(NoAuthRoutes);

export { Routes }