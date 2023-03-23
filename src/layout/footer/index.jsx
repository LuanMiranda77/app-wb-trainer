/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { Exercise } from '../../module/exercise';
import { Home } from '../../module/home';
import { Settings } from '../../module/settings';
import { Training } from '../../module/training';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  backgroundColor,
  colorBase,
  colorFooter,
  colorIconFooter,
  colorPrimary,
  colorTertiary,
  colorWhite,
} from '../../styles';

import { HeaderContainer } from './styles';
import { Evolute } from '../../module/evolute';
// import { Home } from '../module/home'

export function Footer() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'grid' : 'grid-outline';
              break;

            case 'Exercicio':
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;

            case 'Treino':
              iconName = focused ? 'clipboard' : 'clipboard-outline';
              break;

            case 'Config':
              iconName = focused ? 'settings' : 'settings-outline';
              break;

            default:
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorPrimary,
        tabBarInactiveTintColor: colorIconFooter,
        tabBarStyle: {
          backgroundColor: colorFooter,
          height: 60,
          paddingBottom: 4,
        },
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: 'transparent',
        },
        headerBackground: ({ focused, color, size }) => {
          return (
            <View style={style.view}>
              {/* <Button style={style.button} title="dfdf" /> */}
              <Text style={style.text}>{route.name}</Text>
            </View>
          );
        },
        headerShown: route.name == 'Home' ? false : true,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exercicio" component={Exercise} />
      <Tab.Screen name="Treino" component={Training} />
      <Tab.Screen name="Evolução" component={Evolute} />
      <Tab.Screen name="Config" component={Settings} />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: '20%',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    // marginRight:30,
    // fontSize: '25px',
    fontWeight: 'bold',
  },
});
