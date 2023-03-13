import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import { backgroundColor, colorFooter, stylesGlobal } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ButtonPlay,
  Container,
  ContainerDetalhes,
  ContainerImage,
} from './styles';

export function Exercise({...props}) {

  const { listaExercicio, setListaExercicio } = useExercicioPage();
  const onPlay = () => {
    console.warn(props.navigation);
  };
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      {listaExercicio.map((item) => {
        return (
          <Container key={item.id} color={colorFooter}>
            <ContainerImage source={require('../../assets/h-1.jpg')} />
            <View style={{ marginTop: 10 }}>
              <Text style={stylesGlobal.textTitle}>{item.nome}</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <ContainerDetalhes>
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
                <ContainerDetalhes>
                  <IconFire
                    name="local-fire-department"
                    size={16}
                    color="#ffb400"
                  />
                  <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>
                    {item.caloria} cal
                  </Text>
                </ContainerDetalhes>
                <ButtonPlay onPress={onPlay}>
                  <Ionicons
                    name="arrow-redo"
                    size={25}
                    color="#f8753d"
                    style={{ marginRight: 0 }}
                  />
                </ButtonPlay>
              </View>
            </View>
          </Container>
        );
      })}
    </View>
  );
}
