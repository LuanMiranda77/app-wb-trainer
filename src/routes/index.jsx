import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../module/home';
import { Exercise } from '../module/exercise';
import { Settings } from '../module/settings';
import { Training } from '../module/training';



export function Stack(){
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{headerShown:false}}
            >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Exercicio' component={Exercise} />
            <Stack.Screen name='Config' component={Settings} />
            <Stack.Screen name='Treino' component={Training} />
        </Stack.Navigator>
    );
}