import React from 'react';
import { Button, Text, View } from 'react-native';
import { backgroundColor } from '../../styles';
import { Card } from '../../components/card/card';
import { HeaderNavBar } from '../../layout/headerNavBar';

export function Home(props) {
  return (
    <View style={{ backgroundColor: backgroundColor, flex:1 }}>
      <HeaderNavBar userName='Julia Ana'/>
      <Card text1='Treino de Hoje' text2='Peito/Bicepes' exercicio='1/12 completo'/>
    </View>
  );
}
