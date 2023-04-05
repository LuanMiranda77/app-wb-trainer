import { Input, View } from 'native-base';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function InputMask({...props}) {
  return (
    <View style={{ marginBottom: 20 }}>
      <MaskInput
        variant="underlined"
        color="#fff"
        cursorColor="#F8753D"
        borderBottomColor="red"
        {...props}
      />
    </View>
  );
}
