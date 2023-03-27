import { Input, View } from 'native-base';
import React from 'react';

export default function InputSimple(props) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Input
        variant="underlined"
        color="#fff"
        cursorColor="#F8753D"
        borderBottomColor="red"
        {...props}
      />
    </View>
  );
}