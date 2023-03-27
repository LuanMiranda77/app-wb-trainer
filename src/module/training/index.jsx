import { Divider, FormControl } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import InputSimple from '../../components/inputs/inputSimple';
import { ListaExercicico } from '../../components/listaExercicio';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import { useUserContext } from '../../context/useUserContext';
import useImageFind from '../../hooks/useImageFind';
import { useTreinoPage } from '../../hooks/useTreinoPage';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorFooter, colorPrimary, stylesGlobal } from '../../styles';
import grupoMuscular from '../../__mooks/grupoMuscular.json';
import { ButtonDetalhes, Container, ContainerDetalhes, ContainerImage } from './styles.js';

export function Training({ ...props }) {
  const { stateUser, dispatch } = useUserContext();
  const {
    showModal,
    setShowModal,
    typeModal,
    setTypeModal,
    showModalAdd,
    setShowModalAdd,
    treino,
    setTreino,
    listaTreino,
    setListaTreino,
    handleNew,
    handleSave,
    handleListTrainer,
  } = useTreinoPage();

  const img = '../../assets/h-1.jpg';
  const { findImageByName } = useImageFind();

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <HeaderNavBar route={props.route} navigation={props.navigation} buttonRigth={handleNew} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
          {props.route?.params?.treino ? (
            <ListaExercicico
              dataSource={
                props.route?.params?.treino == 0
                  ? stateUser.exercicios
                  : stateUser.exercicios.filter(
                      (item) => item.treino === props.route?.params?.treino
                    )
              }
            />
          ) : (
            listaTreino.map((item) => {
              return (
                <Container
                  key={item._id}
                  color={colorFooter}
                  onPress={() =>
                    props.navigation.navigate('Detalhes do treino', { obj: item })
                  }
                >
                  <ContainerImage
                    source={item.image == '' ? require(img) : findImageByName(item.image)}
                  />
                  <View style={{ marginTop: 10 }}>
                    <Text style={stylesGlobal.textTitle}>Treino - {item.treino}</Text>
                    <Text style={{ marginTop: 5 }}>{item.titulo}</Text>
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
                          {item.tempo} tem
                        </Text>
                      </ContainerDetalhes>
                      <ContainerDetalhes>
                        <IconFire
                          name="local-fire-department"
                          size={15}
                          color="#ffb400"
                          style={{ marginRight: 5 }}
                        />
                        <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>
                          {item.calorias} cal
                        </Text>
                      </ContainerDetalhes>
                      <ContainerDetalhes>
                        <Ionicons
                          name="barbell-outline"
                          size={15}
                          color={(color = colorPrimary)}
                          style={{ marginRight: 5 }}
                        />
                        <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>
                          {item.quant} exe.
                        </Text>
                      </ContainerDetalhes>
                      <ButtonDetalhes
                        onPress={() => {
                          setShowModal(true);
                          setTreino({ ...item });
                          setTypeModal('edit');
                        }}
                      >
                        <Icon
                          name="edit"
                          size={28}
                          color="#f8753d"
                          style={{ marginRight: 0, marginTop: -4 }}
                        />
                      </ButtonDetalhes>
                    </View>
                  </View>
                </Container>
              );
            })
          )}
        </ScrollView>
      </View>

      <ModalSimple
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        title={typeModal === 'new' ? 'Cadastro de Treino' : 'Editar Treino'}
        labelButton={'Salvar'}
        actionButton={handleSave}
      >
        <FormControl>
          <FormControl.Label>Nome:</FormControl.Label>
          <Text style={stylesGlobal.textTitle}>Treino - {treino.treino}</Text>
          <Divider my="2" />
          <FormControl.Label style={{ marginTop: 20 }}>
            Titulo <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <InputSimple
            placeholder="Digite o nome exercicio"
            value={treino.titulo}
            onChangeText={(e) => setTreino({ ...treino, titulo: e })}
          />

          <FormControl.Label>
            Músculo alvo <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <SelectSimple
            dataSource={grupoMuscular}
            onChange={(e) => setTreino({ ...treino, grupo: e })}
            value={treino.grupo}
          />
        </FormControl>
      </ModalSimple>
    </>
  );
}
