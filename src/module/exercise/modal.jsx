import { FormControl, Text } from 'native-base';
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
      labelButton={props.type === 'new' ? 'Adicionar' : 'Salvar'}
      actionButton={props.actionButton}
      safeAreaTop={true}
    >
      <FormControl mt="5">
      <FormControl.Label>Nome <Text style={{color:'red'}}>*</Text></FormControl.Label>
          <InputSimple
            placeholder="Nome do exercicio"
            value={exercicio.nome}
            onChangeText={(e) => setExercicio({ ...exercicio, nome: e })}
          />
          <FormControl.Label>Descrição</FormControl.Label>
          <InputSimple
            placeholder="Descrição"
            value={exercicio.info}
            onChangeText={(e) => setExercicio({ ...exercicio, info: e })}
          />
          <FormControl.Label>Imagem</FormControl.Label>
          <InputSimple
            placeholder="Descrição"
            value={exercicio.info}
            onChangeText={(e) => setExercicio({ ...exercicio, info: e })}
          />
          <FormControl.Label>Descrição</FormControl.Label>
          <InputSimple
            placeholder="Descrição"
            value={exercicio.info}
            onChangeText={(e) => setExercicio({ ...exercicio, info: e })}
          />
      </FormControl>
    </ModalSimple>
  );
}
