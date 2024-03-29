import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputSearch from '../../components/inputs/inputSearch';
import { ListaExercicico } from '../../components/listaExercicio';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorFooter, colorSubtitle, stylesGlobal } from '../../styles';
import ModalExercicio from '../training/modalExercicio';
import Modal from './modal';
import { ModalListaExercicio } from './modalListaExercicio';
import { ButtonPlay, Container, ContainerDetalhes, ContainerImage } from './styles';

export function Exercise({ ...props }) {
  const {
    showModal,
    gruposCorpo,
    handleNew,
    setShowModal,
    exercicio,
    listaExercicio,
    showModalAdd,
    setShowModalAdd,
    setExercicio,
    setTypeModal,
    handleDeleteExercicio,
    handlefindExerciciosSearch,
    handleSave,
    showModalLista,
    setShowModalLista,
    grupoCorpo,
    setGrupoCorpo,
  } = useExercicioPage();

  const { findImageByName } = useImageFind();
  const [search, setSearch] = useState('');

  const onChangeGrupoCorp = (grupo) => {
    setGrupoCorpo(grupo);
    setShowModalLista(true);
  };
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1, paddingTop: props.route ? 0 : 20 }}>
      {props.route && <HeaderNavBar route={props.route} buttonRigth={handleNew} />}
      <InputSearch
        value={search}
        onChangeText={(e) => {
          setSearch(e);
          handlefindExerciciosSearch(e);
        }}
      />
      {search === '' ? (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ marginBottom: props.route ? 5 : 60 }}
        >
          {gruposCorpo.map((item) => {
            return (
              <Container
                key={item.id}
                color={colorFooter}
                onPress={() =>
                  props.navigation
                    ? props.navigation.navigate('Lista Exercicio', { grupo: item.value })
                    : onChangeGrupoCorp(item.value)
                }
              >
                <ContainerImage source={findImageByName(item.image)} />
                <View style={{ marginTop: 10 }}>
                  <Text style={stylesGlobal.textTitle}>{item.label}</Text>
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
                        {item.info}
                      </Text>
                    </ContainerDetalhes>
                    <ButtonPlay
                      onPress={() =>
                        props.navigation
                          ? props.navigation.navigate('Lista Exercicio', { grupo: item.value })
                          : onChangeGrupoCorp(item.value)
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
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 5 }}>
          <ListaExercicico
            dataSource={listaExercicio}
            typeList="1"
            onClickItem={(item) => {
              setExercicio(item);
              setShowModalAdd(true);
            }}
            actionButton={(item) => {
              setExercicio({ ...item });
              setTypeModal('edit');
              setShowModal(true);
            }}
          />
        </ScrollView>
      )}

      <Modal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        exercicio={exercicio}
        setExercicio={setExercicio}
        actionButton={handleSave}
        type="new"
      />

      <ModalExercicio
        showModal={showModalAdd}
        onCloseModal={() => setShowModalAdd(false)}
        exercicio={exercicio}
      />

      <ModalListaExercicio
        showModal={showModalLista}
        onCloseModal={() => setShowModalLista(false)}
        grupo={grupoCorpo}
        onActionNew={handleNew}
      />
    </View>
  );
}
