/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Exercise } from '../../module/exercise';
import { Home } from '../../module/home';
import { Settings } from '../../module/settings';
import { Training } from '../../module/training';
// import { Home } from '../module/home'




export function Footer(){

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Exercicio' component={Exercise} />
            <Tab.Screen name='Config' component={Settings} />
            <Tab.Screen name='Treino' component={Training} />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  view: {
    display: 'flex',
    width: 'auto',
  },
  button: {
    width: '30px',
  },
});
