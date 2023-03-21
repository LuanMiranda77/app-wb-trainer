import { useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { getRaelm } from '../../database/realm';
import { ExercicioInitial } from '../../database/schemas/ExercicioSchema';
import exercicios from '../../__mooks/exercicios.json';
import { arrayF, arrayM } from './grupoExercicios';

export const useExercicioPage = () => {
  const { stateUser } = useUserContext();
  const [exercicio, setExercicio] = useState(ExercicioInitial);
  const [listaExercicio, setListaExercicio] = useState([]);
  const [gruposCorpo, setGruposCorpo] = useState(stateUser.sexo === 'M' ? arrayM : arrayF);
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('new');

  const handleNew = () => {
    setExercicio(ExercicioInitial);
    setTypeModal('new');
    setShowModal(true);
  };

  async function handleSave() {
    const realm = await getRaelm();
    try {
      realm.write(() => {
        realm.create('Exercicio', exercicio);
      });
      realm.close();
      // Alert.alert('Item cadastrado com sucesso.');
      console.warn('Item cadastrado com sucesso.');
    } catch (error) {
      console.error('Algo deu errado');
      realm.close();
    }
  }
  async function handleDeleteExercicio() {}

  async function handlefindExercicios(grupoCorpo) {
    let array = [];
    if (grupoCorpo === 'Braço') {
      array = exercicios.filter(
        (item) => item.grupo == 'Bíceps' || item.grupo == 'Tríceps' || item.grupo == 'Antebranço'
      );
    } else {
      array = exercicios.filter((item) => item.grupo == grupoCorpo);
    }
    console.log(array);
    setListaExercicio([...array]);
  }

  return {
    listaExercicio,
    setListaExercicio,
    gruposCorpo,
    setGruposCorpo,
    handlefindExercicios,
    showModal,
    setShowModal,
    exercicio,
    setExercicio,
    handleNew,
    typeModal,
    setTypeModal,
  };
};
