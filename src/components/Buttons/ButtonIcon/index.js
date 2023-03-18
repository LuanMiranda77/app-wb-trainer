/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { backgroundColor } from '../../../styles';

export default function ButtonIcon({ ...props }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        backgroundColor: backgroundColor,
        width: 50,
        height: 50,
        padding: 8,
      }}
      onPress={props?.onPress}
    >
      <Icon name={props?.icon} size={props?.size} color={props?.color} style={props?.style} />
    </TouchableOpacity>
  );
}
