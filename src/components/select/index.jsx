import { CheckIcon, Select } from 'native-base';
import React from 'react';

export default function SelectSimple(props) {
  return (
    <Select
      selectedValue={props.value}
      minWidth="200"
      accessibilityLabel="Choose Service"
      placeholder="Selecione..."
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      variant="underlined"
      onValueChange={props.onChange}
      color='#ffff'
    >
      {props.dataSource.map((item) => {
        return <Select.Item key={item.id} label={item.label} value={item.value} />;
      })}
    </Select>
  );
}