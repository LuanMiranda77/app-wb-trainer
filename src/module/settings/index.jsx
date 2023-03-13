import React from 'react';
import { Text, View } from 'react-native';
import { backgroundColor } from '../../styles';

export function Settings(){
    return (
        <View style={{ backgroundColor: backgroundColor, flex:1 }}>
            <Text>Settings</Text>
        </View>
    );
}