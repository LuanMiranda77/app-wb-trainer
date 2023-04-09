import { FormControl, Input, Text, View } from 'native-base';
import React from 'react';

export default function InputSimple(props) {
  
  return (
    <View style={{ marginBottom: 20 }}>
      {props.label &&
      <FormControl.Label>
          {props.label} {props.required && <Text style={{ color: 'red' }}>*</Text>}
      </FormControl.Label>
      }
      <Input
        variant="underlined"
        color="#fff"
        cursorColor="#F8753D"
        selectionColor="#F8753D"
        borderBottomColor="red"
        {...props}
      />
    </View>
  );
}
