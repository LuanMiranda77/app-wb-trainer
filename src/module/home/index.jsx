import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../components/card';
import { CardTreino } from '../../components/cardTreino';
import { ListaExercicico } from '../../components/listaExercicio';
import { useUserContext } from '../../context/useUserContext';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorPrimary, stylesGlobal } from '../../styles';

export function Home({ navigation, route }) {
  const { stateUser, dispatch } = useUserContext();
  const [exercicicos, setExercicios] = useState();
  const [treinoAtual, setTreinoAtual] = useState();

  useMemo(() => {
    let array = stateUser.exercicios.filter((item) => item.treino === stateUser.treinoAtual);
    let obj = {
      treino: 'Treino ' + stateUser.treinoAtual,
      titulo: stateUser.exercicios.filter((item) => item.treino === stateUser.treinoAtual)[0].titulo,
      quant: array.length,
    };
    setTreinoAtual({ ...obj });
    setExercicios([...array]);
  }, [stateUser.treinoAtual]);
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar treino={treinoAtual} route={route}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
        <Card text1={treinoAtual?.treino} text2={treinoAtual?.titulo} exercicio={treinoAtual?.quant} feito={Math.floor(Math.random() * (treinoAtual?.quant - 0 + 1)) + 0} />
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
          <TouchableOpacity style={{ color: colorPrimary, fontWeight: 'bold' }} onPress={() => navigation.navigate('Treino', { treino: 0 })}>
            <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>Todos</Text>
          </TouchableOpacity>
        </View>
        <CardTreino navigation={navigation} />
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
        <ListaExercicico dataSource={exercicicos} actionButton={(item)=>navigation.navigate('Detalhes exercício', { exercicio: item })} />
      </ScrollView>
    </View>
  );
}
