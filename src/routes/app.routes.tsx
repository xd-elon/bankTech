import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';
import {Card} from '../pages/Card';

type RootStackParamList = {
  Home?: undefined;
  Card?: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Card" component={Card} />
    </Navigator>
  );
}
