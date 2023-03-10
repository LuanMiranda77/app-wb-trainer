/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';

export function HeaderNavBar(): JSX.Element {
  return (
    <View style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between', padding:4 }}>
      <Button title="menu" />
      <Button title="icon" />
    </View>
  );
}
