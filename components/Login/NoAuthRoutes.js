import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../../screens/LoginScreen/containers'

const NoAuthRoutes = createStackNavigator({
  SignIn: { screen: LoginScreen }
},{
  headerMode: 'none',
});

const Routes = createAppContainer(NoAuthRoutes);

export { Routes }