import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../module/home';
import { Exercise } from '../module/exercise';
import { Settings } from '../module/settings';
import { Training } from '../module/training';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  backgroundColor,
  colorBase,
  colorFooter,
  colorIconFooter,
  colorPrimary,
  colorTertiary,
  colorWhite,
} from '../styles';
import { Evolute } from '../module/evolute';

export function BottomTabNavigator() {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();
  const HeaderConfig = {
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
  };
  function HomeStack() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colorPrimary,
          },
          headerTitleStyle: {
            color: backgroundColor,
          },
          headerShown: route.name == 'Home' ? false : true,
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercicio" component={Exercise} />
        <Stack.Screen name="Config" component={Settings} />
        <Stack.Screen name="Treino" component={Training} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'HomeStack':
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
          backgroundColor: colorPrimary,
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
        headerShown: route.name == 'HomeStack' ? false : true,
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
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
    backgroundColor: colorPrimary,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: backgroundColor,
  },
});
