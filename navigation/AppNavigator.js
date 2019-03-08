import React from 'react';
import { createAppContainer, createStackNavigator  } from 'react-navigation';

import { Routes } from './MainTabNavigator';

export default createAppContainer(createStackNavigator ({
  Main: Routes,
}));