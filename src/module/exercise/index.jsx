import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { backgroundColor, colorFooter, stylesGlobal } from '../../styles';
import { ButtonPlay, Container, ContainerDetalhes, ContainerImage } from './styles';

export function Exercise({ ...props }) {
  const { listaExercicio, setListaExercicio } = useExercicioPage();
  const { findImageByName }=useImageFind();
  const onPlay = () => {
    console.warn(props.navigation);
  };
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 5 }}>
        {listaExercicio.map((item) => {
          return (
            <Container key={item.id} color={colorFooter}>
              <ContainerImage source={findImageByName(item.image)} />
              <View style={{ marginTop: 10 }}>
                <Text style={stylesGlobal.textTitle}>{item.nome}</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                  }}
                >
                  <ContainerDetalhes>
                    <Icon
                      name="clockcircleo"
                      size={15}
                      color="#32ad0c"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={{ color: '#32ad0c', fontWeight: 'bold' }}>{item.tempo} min</Text>
                  </ContainerDetalhes>
                  <ContainerDetalhes>
                    <IconFire name="local-fire-department" size={16} color="#ffb400" />
                    <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>{item.caloria} cal</Text>
                  </ContainerDetalhes>
                  <ContainerDetalhes>
                    <Ionicons name="barbell-outline" size={16} color="#198fb5" />
                    <Text style={{ color: '#198fb5', fontWeight: 'bold', marginLeft: 3 }}>
                      {item.quant}
                    </Text>
                  </ContainerDetalhes>
                </View>
                <ButtonPlay onPress={onPlay}>
                  <Ionicons
                    name="arrow-redo"
                    size={25}
                    color="#f8753d"
                    style={{ marginRight: 0 }}
                  />
                </ButtonPlay>
              </View>
            </Container>
          );
        })}
      </ScrollView>
    </View>
  );
}
