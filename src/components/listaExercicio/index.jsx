import { ScrollView } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useImageFind from '../../hooks/useImageFind';
import { colorFooter, colorSecondary, colorSubtitle, stylesGlobal } from '../../styles';
import {
  ButtonDetalhes,
  ButtonEdit,
  Container,
  ContainerDetalhes,
  ContainerImage,
  EditeExercicio,
} from './styles';

export function ListaExercicico({ ...props }) {
  const { findImageByName } = useImageFind();
  const img = '../../assets/h-1.jpg';

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
        {props.dataSource.map((item) => {
          return (
            <Container
              key={item.id}
              color={colorFooter}
              onPress={() => (props.onClickItem ? props.onClickItem(item) : () => {})}
            >
              <ContainerImage
                source={item.image == '' ? require(img) : findImageByName(item.image)}
              />
              <View style={{ marginTop: 10 }}>
                <Text style={stylesGlobal.textSubTitle}>{item.nome}</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  {!props.typeList ? (
                    <>
                      <ContainerDetalhes>
                        <Icon name="arrowup" size={15} color="#32ad0c" style={{ marginRight: 5 }} />
                        <Text style={{ color: '#32ad0c', fontWeight: 'bold' }}>
                          {item.series} series
                        </Text>
                      </ContainerDetalhes>
                      <ContainerDetalhes>
                        <Icon name="retweet" size={15} color="#ffb400" style={{ marginRight: 5 }} />
                        <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>
                          {item.repeticoes}
                        </Text>
                      </ContainerDetalhes>
                      <ButtonDetalhes color={'#959e9f6f'} onPress={() => props.actionButton(item)}>
                        <Ionicons
                          name="arrow-redo"
                          size={28}
                          color="#f8753d"
                          style={{ marginRight: 0, marginTop: -4 }}
                        />
                      </ButtonDetalhes>
                    </>
                  ) : (
                    <>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <EditeExercicio>
                          <Text
                            style={{
                              color: colorSubtitle,
                              fontWeight: 'bold',
                              marginLeft: 3,
                              width: '120%',
                            }}
                          >
                            {item.grupo}
                          </Text>
                        </EditeExercicio>
                      </View>
                      <ButtonEdit onPress={() => {}}>
                        <Icon
                          name="edit"
                          size={30}
                          color={colorSecondary}
                          style={{ marginTop: -20, marginLeft: 1 }}
                          onPress={() => props.actionButton(item)}
                        />
                      </ButtonEdit>
                    </>
                  )}
                </View>
              </View>
            </Container>
          );
        })}
      </ScrollView>
    </>
  );
}
