import { FormControl } from 'native-base';
import React, { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
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
import { ButtonEdit, Container, ContainerImage, EditeExercicio } from './styles';
import grupoMuscular from '../../__mooks/grupoMuscular.json'

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
    handleSave,
    gruposCorpo,
  } = useExercicioPage();
  const { findImageByName } = useImageFind();
  const img = '../../assets/h-1.jpg';

  useMemo(() => {
    handlefindExercicios(props.route.params.grupo);
  }, []);

  return (
    <>
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
                      setExercicio({
                        ...exercicio,
                        nome: item.nome,
                        titulo: item.titulo,
                        image: item.image,
                        grupo: item.grupo,
                        info: item.info,
                      });
                      setTypeModal('edit');
                      setShowModal(true);
                    }}
                  />
                </ButtonEdit>
              </Container>
            );
          })}
        </ScrollView>
      </View>
      <ModalSimple
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        title="Exercicio"
        labelButton="Adicionar"
        actionButton={handleSave}
      >
        <FormControl mt="5">
          <FormControl.Label>
            Nome <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <InputSimple
            placeholder="Digite o nome exercicio"
            value={exercicio.nome}
            onChangeText={(e) => setExercicio({ ...exercicio, nome: e })}
          />
          <FormControl.Label>Descrição</FormControl.Label>
          <InputSimple
            placeholder="Digite uma descrição"
            value={exercicio.info}
            onChangeText={(e) => setExercicio({ ...exercicio, info: e })}
          />
          <FormControl.Label>Titulo</FormControl.Label>
          <InputSimple
            placeholder="Digite um titulo"
            value={exercicio.titulo}
            onChangeText={(e) => setExercicio({ ...exercicio, titulo: e })}
          />
          <FormControl.Label>
            Músculo alvo <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <SelectSimple
            dataSource={grupoMuscular}
            onChange={(e) => setExercicio({ ...exercicio, grupo: e })}
            value={exercicio.grupo}
          />
        </FormControl>
      </ModalSimple>
      {/* <Modal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        exercicio={exercicio}
        setExercicio={''}
        actionButton={handleSave}
        type={typeModal}
      /> */}
    </>
  );
}
