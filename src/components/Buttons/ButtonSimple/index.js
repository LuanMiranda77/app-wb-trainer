/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colorPrimary } from '../../../styles';

export default function ButtonSimple(props) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        backgroundColor: props.backgroundColor ? props.backgroundColor : colorPrimary,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={()=>props.onPress()}
    >
      <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{props.label}</Text>
    </TouchableOpacity>
  );
}
