/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Exercise } from '../../module/exercise';
import { Home } from '../../module/home';
import { Settings } from '../../module/settings';
import { Training } from '../../module/training';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { backgroundColor, colorFooter, colorIconFooter, colorPrimary, colorTertiary } from '../../styles';
// import { Home } from '../module/home'

export function Footer() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let colorF;

          switch (route.name) {
            case 'Home':
              iconName = focused
              ? 'grid' 
              : 'grid-outline';
              colorF=colorPrimary
              break;

            case 'Exercicio':
              iconName = focused
              ? 'barbell' 
              : 'barbell-outline';
              colorF=colorPrimary
              break;

            case 'Treino':
              iconName = focused
              ? 'clipboard' 
              : 'clipboard-outline';
              colorF=colorPrimary
              break;

            case 'Config':
              iconName = focused
              ? 'settings' 
              : 'settings-outline';
              colorF=colorPrimary
              break;
          
            default:
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
              colorF=colorPrimary
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorPrimary,
        tabBarInactiveTintColor: colorIconFooter,
        tabBarStyle: {
          backgroundColor:colorFooter,
          height: 60,
          paddingBottom: 4,
        },
        headerStyle:{
          backgroundColor:backgroundColor,
        },
        headerShown: (route.name=='Home'  ? false : true)
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exercicio" component={Exercise} />
      <Tab.Screen name="Treino" component={Training} />
      <Tab.Screen name="Config" component={Settings} />
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
