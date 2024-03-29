import { Center, FormControl, Image, Text } from 'native-base';
import React from 'react';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import { emunImage } from '../../utils/enums';
import grupoMuscular from '../../__mooks/grupoMuscular.json';

export default function Modal(props) {
  // const { exercicio, setExercicio, gruposCorpo } = useExercicioPage();
  const img = '../../assets/h-1.jpg';
  return (
    <ModalSimple
      showModal={props.showModal}
      onCloseModal={props.onCloseModal}
      title={props.type === 'new' ? 'Cadastro de Exercicio' : 'Editar Exercicio'}
      labelButton={'Salvar'}
      actionButton={props.actionButton}
      // safeAreaTop={true}
    >
      <FormControl mt="5">
        <Center mb='5'>
          <Image
            h="300"
            w="300"
            alt="image"
            source={props.exercicio.image == '' ? require(img) : emunImage[props.exercicio.image]}
          />
        </Center>
        <FormControl.Label>
          Nome <Text style={{ color: 'red' }}>*</Text>
        </FormControl.Label>
        <InputSimple
          placeholder="Digite o nome exercicio"
          value={props.exercicio.nome}
          onChangeText={(e) => props.setExercicio({ ...props.exercicio, nome: e })}
        />
        <FormControl.Label>Descrição</FormControl.Label>
        <InputSimple
          placeholder="Digite uma descrição"
          value={props.exercicio.info}
          onChangeText={(e) => props.setExercicio({ ...props.exercicio, info: e })}
        />
        <FormControl.Label>Titulo</FormControl.Label>
        <InputSimple
          placeholder="Digite um titulo"
          value={props.exercicio.titulo}
          onChangeText={(e) => props.setExercicio({ ...props.exercicio, titulo: e })}
        />
        <FormControl.Label>
          Músculo alvo <Text style={{ color: 'red' }}>*</Text>
        </FormControl.Label>
        <SelectSimple
          dataSource={grupoMuscular}
          onChange={(e) => props.setExercicio({ ...props.exercicio, grupo: e })}
          value={props.exercicio.grupo}
        />
      </FormControl>
    </ModalSimple>
  );
}
