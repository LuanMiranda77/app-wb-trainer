import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputSearch from '../../components/inputs/inputSearch';
import { ListaExercicico } from '../../components/listaExercicio';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorFooter, colorSubtitle, stylesGlobal } from '../../styles';
import Modal from './modal';
import ModalAddTreino from './modalAddtreino';
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
  } = useExercicioPage();
  const { findImageByName } = useImageFind();
  const [search, setSearch] = useState('');
  console.log(props.route);
  return (
   
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <HeaderNavBar route={props.route} buttonRigth={handleNew} />
      <InputSearch
        value={search}
        onChangeText={(e) => {
          setSearch(e);
          // if (e.length >= 3) {
            handlefindExerciciosSearch(e);
          // }
        }}
      />
      {search === '' ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 5 }}>
          {gruposCorpo.map((item) => {
            return (
              <Container key={item.id} color={colorFooter}>
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
                        props.navigation.navigate('Lista Exercicio', { grupo: item.value })
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
              setExercicio({...item});
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
      
      <ModalAddTreino
        showModal={showModalAdd}
        onCloseModal={() => setShowModalAdd(false)}
        exercicio={exercicio}
      />
    </View>
  );
}
