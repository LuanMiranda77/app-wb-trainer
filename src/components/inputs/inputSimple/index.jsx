import { FormControl, Input, Text, View } from 'native-base';
import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { colorPrimary, colorSecondary, colorWhite } from '../../../styles';

export default function InputSimple(props) {
  const [isFocused, setIsFocused] = useState();

  handleFocus = () => setIsFocused(true);
 
  handleBlur = () => setIsFocused(false);
  
  return (
    <View style={{ marginBottom: 20 }}>
      {props.label &&
      <FormControl.Label>
          {props.label} {props.required && <Text style={{ color: 'red' }}>*</Text>}
      </FormControl.Label>
      }
      <TextInput
        variant="underlined"
        color={colorWhite}
        selectionColor={colorSecondary}
        style={{width:'100%', borderBottomWidth:1, borderColor: isFocused ? colorPrimary : "#454444"}}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
}
