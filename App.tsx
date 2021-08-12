import React from 'react';

import { Home } from './src/pages/Home';
import { Card } from './src/pages/Card';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        
        <Stack.Screen  name="Card" component={Card} />
        <Stack.Screen  name="Home" component={Home} />  
        
      </Stack.Navigator>
    </NavigationContainer>
   );
};


export default App;
