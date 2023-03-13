import React from 'react';
import { Button, Text, View } from 'react-native';
import { backgroundColor, colorPrimary, stylesGlobal } from '../../styles';
import { Card } from '../../components/card';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { CardTreino } from '../../components/cardTreino';
import { ScrollView } from 'react-native-gesture-handler';
import { ListaExercicico } from '../../components/listaExercicio';

export function Home(props) {
  const array = [
    {id:1, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:2, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:3, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:4, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:5, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:6, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
    {id:7, image: '', nome: 'Trapezio', tempo: 10, caloria: 120 },
  ];
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar userName="Julia Ana" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ marginBottom: 0 }}
      >
        <Card
          text1="Treino de Hoje"
          text2="Peito/Bicepes"
          exercicio="1/12 completo"
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 25,
            paddingRight: 25,
            marginBottom: -15,
          }}
        >
          <Text style={stylesGlobal.textTitle}>Seus treinos</Text>
          <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>Todos</Text>
        </View>
        <CardTreino />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 25,
            paddingRight: 25,
            marginBottom: 1,
          }}
        >
          <Text style={stylesGlobal.textTitle}>Exercícios do treino</Text>
          <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>Todos</Text>
        </View>
        <ListaExercicico dataSource={array}/>
      </ScrollView>
    </View>
  );
}
