import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ListaExercicico } from '../../components/listaExercicio';
import { ExercicioInitial } from '../../database/schemas/ExercicioSchema';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import { HeaderNavBar } from '../../layout/headerNavBar';

import { backgroundColor } from '../../styles';
import ModalExercicio from '../training/modalExercicio';
import Modal from './modal';

export function ListExercise(props) {
  const {
    handlefindExercicios,
    listaExercicio,
    showModal,
    setShowModal,
    exercicio,
    setExercicio,
    handleNew,
    setTypeModal,
    handleSave,
    showModalAdd,
    setShowModalAdd,
  } = useExercicioPage();
  const img = '../../assets/h-1.jpg';

  useMemo(() => {
    handlefindExercicios(props.route ? props.route.params.grupo : props.grupo);
  }, []);

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        {props.route && (
          <HeaderNavBar
            route={props.route}
            navigation={props.navigation}
            buttonRigth={() => {
              handleNew();
              setExercicio({ ...ExercicioInitial, grupo: props.route.params.grupo });
            }}
          />
        )}
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
      </View>

      <ModalExercicio
        showModal={showModalAdd}
        onCloseModal={() => setShowModalAdd(false)}
        exercicio={exercicio}
      />

      <Modal
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        exercicio={exercicio}
        setExercicio={setExercicio}
        actionButton={handleSave}
      />
    </>
  );
}
