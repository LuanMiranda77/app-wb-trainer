/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { backgroundColor } from '../../../styles';

export default function ButtonIcon({ ...props }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: props.borderRadius ? props.borderRadius : 30,
        backgroundColor: props.backgroundColor ? props.backgroundColor : backgroundColor,
        width: props.width ? props.width : 50,
        height: props.height ? props.height : 50,
        padding: props.padding ? props.padding : 8,
      }}
      onPress={props?.onPress}
    >
      <Icon name={props?.icon} size={props?.size} color={props?.color} style={props?.style} />
    </TouchableOpacity>
  );
}
