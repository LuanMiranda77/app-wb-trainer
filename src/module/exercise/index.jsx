import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorFooter, colorSubtitle, stylesGlobal } from '../../styles';
import Modal from './modal';
import { ButtonPlay, Container, ContainerDetalhes, ContainerImage } from './styles';

export function Exercise({ ...props }) {
  const { showModal, gruposCorpo, handleNew, setShowModal, exercicio, handleSave } = useExercicioPage();
  const { findImageByName } = useImageFind();
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar route={props.route} buttonRigth={handleNew} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 5 }}>
        {gruposCorpo.map((item) => {
          return (
            <Container key={item.id} color={colorFooter}>
              <ContainerImage source={findImageByName(item.image)} />
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
                    <Text
                      style={{
                        color: colorSubtitle,
                        fontWeight: 'bold',
                        marginLeft: 3,
                        width: '120%',
                      }}
                    >
                      {item.titulo}
                    </Text>
                  </ContainerDetalhes>
                  <ButtonPlay
                    onPress={() =>
                      props.navigation.navigate('Lista Exercicio', { grupo: item.nome })
                    }
                  >
                    <Ionicons
                      name="arrow-redo"
                      size={32}
                      color="#f8753d"
                      style={{ marginTop: -15 }}
                    />
                  </ButtonPlay>
                </View>
              </View>
            </Container>
          );
        })}
      </ScrollView>
      <Modal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        exercicio={exercicio}
        actionButton={handleSave}
      />
    </View>
  );
}
