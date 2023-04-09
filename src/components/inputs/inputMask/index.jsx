import { FormControl, Text, View } from 'native-base';
import React, {useState} from 'react';
import MaskInput from 'react-native-mask-input';
import { colorIconFooter, colorPrimary } from '../../../styles';

export default function InputMask({ ...props }) {
  const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  const MASK_ALTURA = [/\d/,".", /\d/, /\d/]
  const MASK_PESO = [/\d/,/\d/,".", /\d/, /\d/, /\d/]
  const [isFocused, setIsFocused] = useState();

 handleFocus = () => setIsFocused(true);

 handleBlur = () => setIsFocused(false);

  return (
    <View style={{ marginBottom: 20, width:'100%' }}>
      {props.label && (
        <FormControl.Label>
          {props.label} {props.required && <Text style={{ color: 'red' }}>*</Text>}
        </FormControl.Label>
      )}
      <MaskInput
        variant="underlined"
        color="#fff"
        onFocus={handleFocus}
        onBlur={handleBlur}
        cursorColor="#F8753D"
        selectionColor="#F8753D"
        style={{width:'100%', borderBottomWidth:1, borderColor: isFocused ? colorPrimary : "#454444"}}
        mask={props.mask == 'peso' ? MASK_PESO : MASK_ALTURA}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}
