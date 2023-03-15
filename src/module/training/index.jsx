import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListaExercicico } from '../../components/listaExercicio';
import { useUserContext } from '../../context/useUserContext';
import { backgroundColor } from '../../styles';

export function Training({ navigation, route }) {
  //   const { treino } = route?.params;
  const { stateUser, dispatch } = useUserContext();
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
        {route?.params?.treino ? (
          <ListaExercicico dataSource={route?.params?.treino == 0 ? stateUser.exercicios : stateUser.exercicios.filter((item) => item.treino === route?.params?.treino)} />
        ) : (
          <ListaExercicico dataSource={stateUser.diasTreinos} />
        )}
      </ScrollView>
    </View>
  );
}
