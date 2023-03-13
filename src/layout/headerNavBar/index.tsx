/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';
import { backgroundColor, colorIconFooter, colorWhite } from '../../styles';
import { PerfilUser, NavBar, Label } from './styles';

export function HeaderNavBar(props: any): JSX.Element {
  return (
    <NavBar color={backgroundColor}>
      {/* <Button title="    "
        onPress={() => props.navigation.openDrawer()} /> */}
      <View>
        <Text style={{fontSize:15, color:colorIconFooter}}>Ola! Vamos treinar  👋</Text>
        <Text style={{fontSize:25, color:colorWhite}}>{props.userName}</Text>
      </View>
      <PerfilUser source={require('../../assets/menina.jpeg')} />
    </NavBar>
  );
}
