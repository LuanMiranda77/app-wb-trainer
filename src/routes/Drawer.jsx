/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../module/home';
import { Exercise } from '../module/exercise';
import { Settings } from '../module/settings';
import { Training } from '../module/training';
import { Text } from 'react-native';
import { colorPrimary } from '../styles';

export function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='Home'
      screenOptions={{headerShown:false, drawerActiveBackgroundColor:colorPrimary}}
      children={<Text>tete</Text>}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Exercicio" component={Exercise} />
      <Drawer.Screen name="Config" component={Settings} />
      <Drawer.Screen name="Treino" component={Training} />
    </Drawer.Navigator>
  );
}
