/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../module/home';
import { Exercise } from '../module/exercise';
import { Settings } from '../module/settings';
import { Training } from '../module/training';

export function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Exercicio" component={Exercise} />
      <Drawer.Screen name="Config" component={Settings} />
      <Drawer.Screen name="Treino" component={Training} />
    </Drawer.Navigator>
  );
}
