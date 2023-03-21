import { Input, View } from 'native-base';
import React from 'react';
import { colorPrimary, colorSecondary } from '../../styles';

export default function InputSimple(props) {
  return <View style={{marginBottom:20}}>
    <Input variant="underlined" {...props} color='#fff' cursorColor='#F8753D' borderBottomColor='red'/>
    </View>
}
