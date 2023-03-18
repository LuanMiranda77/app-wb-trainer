import { FormControl } from 'native-base';
import React from 'react';
import InputSimple from '../../components/input';
import ModalSimple from '../../components/modal/modalSimple';
import { useExercicioPage } from '../../hooks/useExercicioPage';

export default function Modal(props) {
  const { exercicio, setExercicio } = useExercicioPage();
  return (
    <ModalSimple
      showModal={props.showModal}
      onCloseModal={props.onCloseModal}
      title={props.type === 'new' ? 'Cadastro de Exercicio' : 'Editar Exercicio'}
      labelButton="Salvar"
      actionButton={props.actionButton}
      safeAreaTop={true}
    >
      <FormControl mt="3">
        <FormControl.Label>Nome</FormControl.Label>
        <InputSimple
          placeholder="Nome do exercicio"
          value={props.exercicio.nome}
          onChangeText={(e) => props.setExercicio({ nome: e })}
        />
        <FormControl.Label>Descrição</FormControl.Label>
        <InputSimple
          placeholder="Descrição"
          value={props.exercicio.info}
          onChangeText={(e) => props.setExercicio({ info: e })}
        />
      </FormControl>
    </ModalSimple>
  );
}
