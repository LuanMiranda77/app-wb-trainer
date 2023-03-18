import React, { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { HeaderNavBar } from '../../layout/headerNavBar';

import {
  backgroundColor,
  colorFooter,
  colorSecondary,
  colorSubtitle,
  colorWhite,
} from '../../styles';
import Modal from './modal';
import { ButtonEdit, Container, ContainerImage, EditeExercicio } from './styles';

export function ListExercise(props) {
  const {
    handlefindExercicios,
    listaExercicio,
    showModal,
    setShowModal,
    exercicio,
    setExercicio,
    handleNew,
    typeModal,
    setTypeModal,
  } = useExercicioPage();
  const { findImageByName } = useImageFind();
  const img = '../../assets/h-1.jpg';
  console.log(props.route.params.grupo);
  useMemo(() => {
    handlefindExercicios(props.route.params.grupo);
  }, []);
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar route={props.route} navigation={props.navigation} buttonRigth={handleNew} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 5 }}>
        {listaExercicio.map((item) => {
          return (
            <Container key={item.id} color={colorFooter}>
              <ContainerImage
                source={item.image == '' ? require(img) : findImageByName(item.image)}
              />
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: colorWhite,
                    width: '70%',
                  }}
                >
                  {item.nome}
                </Text>
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
              </View>
              <ButtonEdit onPress={() => {}}>
                <Icon
                  name="edit"
                  size={30}
                  color={colorSecondary}
                  style={{ marginTop: -1 }}
                  onPress={() => {
                    setExercicio(item);
                    setTypeModal('edit');
                    setShowModal(true);
                  }}
                />
              </ButtonEdit>
            </Container>
          );
        })}
      </ScrollView>
      {/* <ModalSimple
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        title="Exercicio"
        labelButton="Salvar"
      >
        <FormControl mt="3">
          <FormControl.Label>Nome</FormControl.Label>
          <InputSimple
            placeholder="Nome do exercicio"
            value={exercicio.nome}
            onChangeText={(e) => setExercicio({ nome: e })}
          />
          <FormControl.Label>Descrição</FormControl.Label>
          <InputSimple
            placeholder="Descrição"
            value={exercicio.info}
            onChangeText={(e) => setExercicio({ info: e })}
          />
        </FormControl>
      </ModalSimple> */}
      <Modal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        type={typeModal}
        exercicio={exercicio}
        setExercicio={setExercicio}
        actionButton={handleNew}
      />
    </View>
  );
}
