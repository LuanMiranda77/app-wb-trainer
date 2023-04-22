import { CheckIcon, FormControl, Select, Text } from 'native-base';
import React from 'react';
import { colorSecondary, colorWhite } from '../../styles';

export default function SelectSimple(props) {
  return (
    <>
      {props.label && (
        <FormControl.Label mb='2'>
          {props.label} {props.required &&<Text style={{ color: 'red' }}>*</Text>}
        </FormControl.Label>
      )}
      <Select
        selectedValue={props.value}
        accessibilityLabel="Selecione..."
        placeholder="Selecione..."
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        variant="underlined"
        onValueChange={props.onChange}
        color={colorWhite}
        selectionColor={colorSecondary}
        {...props}
      >
        {props.dataSource.map((item) => {
          return <Select.Item key={item.id} label={item.label} value={item.value} />;
        })}
      </Select>
    </>
  );
}
