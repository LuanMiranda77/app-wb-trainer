import { Flex, Text, View } from 'native-base';
import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { useTreinoPage } from '../../hooks/useTreinoPage';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorFooter, colorPrimary, stylesGlobal } from '../../styles';
import { ContainerDetalhes } from './styles';

export function TrainerDetalhes({ ...props }) {
  const obj = props.route?.params?.obj;
  const { listaTreinoExercicio, setListaExercicio, handleListExercicioByTrainer } = useTreinoPage();
  useMemo(() => {
    handleListExercicioByTrainer(obj.treino);
  },[]);
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar route={props.route} navigation={props.navigation} />
      <View style={{ padding: 15 }}>
        <Text style={stylesGlobal.textTitle}>Treino - {obj.treino}</Text>
        <Flex direction="row" mb="2.5" mt="8">
          <ContainerDetalhes>
            <Icon name="clockcircleo" size={20} color="#32ad0c" style={{ marginRight: 10 }} />
            <View>
              <Text style={stylesGlobal.textSubTitle}>Duração</Text>
              <Text style={{ color: '#32ad0c', fontWeight: 'bold' }}>{obj.tempo} mim</Text>
            </View>
          </ContainerDetalhes>
          <ContainerDetalhes>
            <IconFire
              name="local-fire-department"
              size={25}
              color="#ffb400"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={stylesGlobal.textSubTitle}>Calorias</Text>
              <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>{obj.calorias} kcal</Text>
            </View>
          </ContainerDetalhes>
          <ContainerDetalhes>
            <Ionicons
              name="barbell-outline"
              size={25}
              color={(color = colorPrimary)}
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={stylesGlobal.textSubTitle}>Exercícios</Text>
              <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>{obj.quant} quant</Text>
            </View>
          </ContainerDetalhes>
        </Flex>
      </View>
      <View
        style={{
          backgroundColor: colorFooter,
          flex: 1,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 15,
        }}
      >
        <Text style={stylesGlobal.textTitle}>Lista de exercícios</Text>
        <View>
          {listaTreinoExercicio.map((item, index) => (
            <View key={index}>
              <Text style={stylesGlobal.textSubTitle}>{item.treino}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
