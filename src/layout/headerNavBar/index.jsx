import React from 'react';
import { Text, View } from 'react-native';
import { useUserContext } from '../../context/useUserContext';
import { backgroundColor, colorIconFooter, colorWhite } from '../../styles';
import { NavBar, PerfilUser } from './styles';

export function HeaderNavBar({...props}) {
  const { stateUser } = useUserContext();
  return (
    <NavBar color={backgroundColor}>
      {/* <Button title="    "
        onPress={() => props.navigation.openDrawer()} /> */}
      <View>
        <Text style={{ fontSize: 15, color: colorIconFooter }}>Ola! Vamos treinar 👋</Text>
        <Text style={{ fontSize: 25, color: colorWhite }}>{stateUser.nome}</Text>
      </View>
      <PerfilUser source={require('../../assets/menina.jpeg')} />
    </NavBar>
  );
}
