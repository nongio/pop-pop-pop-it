import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import FinishScreen from '../screens/FinishScreen';

export default createDrawerNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    Play: {
        screen: PlayScreen,
    },
    Final: {
        screen: FinishScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
  {
    headerMode: 'none',
  }
);
