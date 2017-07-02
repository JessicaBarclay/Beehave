import React from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import BeeHive from './src/screens/BeeHive';
import { StackNavigator } from 'react-navigation';

const BeeAppy = StackNavigator({
  Home: { screen: Home },
  Donate: { screen: Donate },
  BeeHive: { screen: BeeHive },
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
