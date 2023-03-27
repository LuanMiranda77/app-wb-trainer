import { Input, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorIconFooter, colorSecondary, colorSubtitle } from '../../../styles';
import { ButtonSet } from './styles';

export default function InputIncrement(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: parseInt(props.w) * 2.7,
        backgroundColor: colorSubtitle,
        borderRadius: 8,
      }}
    >
      <ButtonSet onPress={props?.onPress} color={colorIconFooter}>
        <Icon name={'minus'} size={20} color={colorSecondary} />
      </ButtonSet>

      <Input
        variant="unstyled"
        color="#fff"
        cursorColor="#F8753D"
        borderBottomColor="red"
        keyboardType="numeric"
        {...props}
      />

      <ButtonSet onPress={props?.onPress} color={colorIconFooter}>
        <Icon name="plus" size={20} color={colorSecondary} />
      </ButtonSet>
    </View>
  );
}
