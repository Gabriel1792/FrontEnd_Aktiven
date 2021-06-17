import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Tutorial from './components/Tutorial';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Tutorial" 
          component={Tutorial} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
