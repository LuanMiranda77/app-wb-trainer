import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  backgroundColor,
  colorBase,
  colorFooter,
  colorIconFooter,
  colorPrimary,
  colorSecondary,
  colorTertiary,
  colorWhite,
  stylesGlobal,
} from '../../styles';
import { ButtonPlay, Container, ContainerDetalhes, ContainerImage, Div } from './styles';

export function ListaExercicico({ ...props }) {
  
  const onPlay = () => {
    console.warn('test');
  };

  return (
    <>
    {
      props.dataSource.map((item)=> {

        return (
            <Container key={item.id} color={colorFooter}>
              <ContainerImage source={require('../../assets/h-1.jpg')} />
              <View style={{marginTop:10}}>
                <Text style={stylesGlobal.textTitle}>{item.nome}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
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
                  <ButtonPlay color={'#959e9f6f'} onPress={onPlay}>
                    <Icon
                      name="caretright"
                      size={25}
                      color="#f8753d"
                      style={{ marginRight: 5 }}
                    />
                  </ButtonPlay>
                </View>
              </View>
            </Container>
        );

      })
    }
  </>
  );
}
