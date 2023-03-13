import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { FlatList } from 'react-native-gesture-handler';
import { useCardTreino, treinos } from '../../hooks/useCardTreino';
import {
  backgroundColor,
  colorFooter,
  colorIconFooter,
  colorPrimary,
  colorSecondary,
  colorWhite,
  styleGlobal,
  stylesGlobal,
} from '../../styles';
import {
  ButtonPlay,
  Container,
  ContainerDetalhes,
  ContainerImage,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import h1 from '../../assets/h-1.jpg'

export function CardTreino({ ...props }) {
  // const { listaTreino, setListaTreino } = useCardTreino();
  const onPlay = () => {
    console.warn('test');
  };
  const renderItem = (data) => {
    const { item } = data;
    return (
      <>
        <Container color={colorFooter}>
          {item.id == 1 ? (
            <ContainerImage source={require('../../assets/h-1.jpg')} />
          ) : item.id == 2 ? (
            <ContainerImage source={require('../../assets/h-2.jpg')} />
          ) : item.id == 3 ? (
            <ContainerImage source={require('../../assets/h-3.jpg')} />
          ) : item.id == 4 ? (
            <ContainerImage source={require('../../assets/h-4.jpg')} />
          ) : item.id == 5 ? (
            <ContainerImage source={require('../../assets/h-5.jpg')} />
          ) : item.id == 6 ? (
            <ContainerImage source={require('../../assets/h-6.jpg')} />
          ) : (
            <ContainerImage source={require('../../assets/h-7.jpg')} />
          )}
          <View style={{ padding: 10 }}>
            <View>
              <Text style={stylesGlobal.textTitle}>{item.treino}</Text>
              <Text>{item.grupo}</Text>
            </View>
            <ButtonPlay color={backgroundColor} onPress={onPlay}>
              <Icon
                name="caretright"
                size={25}
                color="#f8753d"
                style={{ marginRight: 5 }}
              />
            </ButtonPlay>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <ContainerDetalhes color="#32ad0c" background="#31ad0c22">
                <Icon
                  name="clockcircleo"
                  size={15}
                  color="#32ad0c"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: '#32ad0c', fontWeight: 'bold' }}>
                  {item.tempo} min
                </Text>
              </ContainerDetalhes>
              <ContainerDetalhes color="#ffb400" background="#ffb30022">
                <IconFire
                  name="local-fire-department"
                  size={16}
                  color="#ffb400"
                />
                <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>
                  {item.caloria} cal
                </Text>
              </ContainerDetalhes>
              <ContainerDetalhes color="#198fb5" background="#198fb522">
                <Ionicons name="barbell-outline" size={20} color="#198fb5" />
                <Text
                  style={{
                    color: '#198fb5',
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}
                >
                  {item.exercicio} exe
                </Text>
              </ContainerDetalhes>
            </View>
          </View>
        </Container>
      </>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={treinos}
      renderItem={renderItem}
      // extraData={selectedId}
      // renderItem={({ item }) => <Text>dsds</Text>}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: '100%',
              width: 0,
              // backgroundColor: '#CED0CE',
            }}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
