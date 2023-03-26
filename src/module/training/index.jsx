import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListaExercicico } from '../../components/listaExercicio';
import { useUserContext } from '../../context/useUserContext';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor } from '../../styles';

export function Training({ ...props }) {
  //   const { treino } = route?.params;
  const { stateUser, dispatch } = useUserContext();
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar route={props.route} navigation={props.navigation} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
        {props.route?.params?.treino ? (
          <ListaExercicico dataSource={props.route?.params?.treino == 0 ? stateUser.exercicios : stateUser.exercicios.filter((item) => item.treino === props.route?.params?.treino)} />
        ) : (
          <ListaExercicico dataSource={[]} />
        )}
      </ScrollView>
    </View>
  );
}
