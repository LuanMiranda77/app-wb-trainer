import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { useUserContext } from '../../context/useUserContext';
import { useCardTreino } from '../../hooks/useCardTreino';
import { backgroundColor, colorFooter, stylesGlobal } from '../../styles';
import { ButtonPlay, Container, ContainerDetalhes, ContainerImage } from './styles';

export function CardTreino({ navigation }) {
  const { listaTreino, setListaTreino } = useCardTreino();
  const { stateUser, dispatch } = useUserContext();
  const onPlay = () => {
    console.error('test');
  };
  const renderItem = (data) => {
    const { item } = data;
    // console.warn(item.image);
    return (
      <>
        <Container color={colorFooter} onPress={() => dispatch({ type: 'setTreinoAtual', playload: item.treino})}>
          {item.treino == 'A' ? (
            <ContainerImage source={require('../../assets/h-1.jpg')} />
          ) : item.treino == 'B' ? (
            <ContainerImage source={require('../../assets/h-2.jpg')} />
          ) : item.treino == 'C' ? (
            <ContainerImage source={require('../../assets/h-3.jpg')} />
          ) : item.treino == 'D' ? (
            <ContainerImage source={require('../../assets/h-4.jpg')} />
          ) : item.treino == 'E' ? (
            <ContainerImage source={require('../../assets/h-5.jpg')} />
          ) : item.treino == 'F' ? (
            <ContainerImage source={require('../../assets/h-6.jpg')} />
          ) : (
            <ContainerImage source={require('../../assets/h-7.jpg')} />
          )}
          <View style={{ padding: 10 }}>
            <View>
              <Text style={stylesGlobal.textTitle}>{`Treino ${item.treino}`}</Text>
              <Text>{item.titulo}</Text>
            </View>
            <ButtonPlay
              color={backgroundColor}
              onPress={() => {
                navigation.navigate('Treino', { treino: item.treino });
              }}
            >
              <Icon name="caretright" size={25} color="#f8753d" style={{ marginRight: 5 }} />
            </ButtonPlay>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <ContainerDetalhes color="#32ad0c" background="#31ad0c22">
                <Icon name="clockcircleo" size={12} color="#32ad0c" style={{ marginRight: 5 }} />
                <Text style={{ color: '#32ad0c', fontWeight: 'bold', fontSize:12 }}>{item.tempo} min</Text>
              </ContainerDetalhes>
              <ContainerDetalhes color="#ffb400" background="#ffb30022">
                <IconFire name="local-fire-department" size={12} color="#ffb400" />
                <Text style={{ color: '#ffb400', fontWeight: 'bold', fontSize:12 }}>{item.calorias.toFixed(2)} cal</Text>
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
                  {item.quant} exe
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
      data={listaTreino}
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
