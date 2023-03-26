import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ListaExercicico } from '../../components/listaExercicio';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import { HeaderNavBar } from '../../layout/headerNavBar';

import { backgroundColor } from '../../styles';
import Modal from './modal';
import ModalAddTreino from './modalAddtreino';

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
    handlefindExercicios(props.route.params.grupo);
  }, []);

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <HeaderNavBar route={props.route} navigation={props.navigation} buttonRigth={handleNew} />
        <ListaExercicico
          dataSource={listaExercicio}
          typeList="1"
          onClickItem={(item) => {
            setExercicio(item);
            setShowModalAdd(true);
          }}
          actionButton={(item) => {
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
      </View>

      <ModalAddTreino
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
      {/* <ModalSimple
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
      </ModalSimple> */}
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
