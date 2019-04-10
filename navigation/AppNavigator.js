import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../screens/LoginScreen/containers';
import HomeScreen from './../screens/Home/containers';
import PriceListScreen from './../screens/PriceList/containers';
import VisitsScreen from './../screens/Visits/containers';
import SurveyScreen from './../screens/Survey/containers';

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
  },
  PriceList: { 
    screen: PriceListScreen,
    navigationOptions: {
      header: null
    }
  },
  Encuestas: { 
    screen: SurveyScreen,
    navigationOptions: {
      header: null
    }
  },
  Visitas: { 
    screen: VisitsScreen,
    navigationOptions: {
      header: null
    }
  },
});

const Routes = createAppContainer(NoAuthRoutes);

export { Routes }