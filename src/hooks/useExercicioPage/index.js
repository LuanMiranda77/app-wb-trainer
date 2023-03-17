import { useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { getRaelm } from '../../database/realm';
export const useExercicioPage = () => {
  const { stateUser } = useUserContext();
  const [exercicio, setExercicio] = useState();
  const arrayM = [
    { id: 1, image: 'peitoral-m', nome: 'Peitoral', tempo: 10, caloria: 120, quant: 10 },
    { id: 2, image: 'ombros-m', nome: 'Ombros', tempo: 10, caloria: 120, quant: 10 },
    { id: 7, image: 'dorsal-m', nome: 'Dorsal', tempo: 10, caloria: 120, quant: 10 },
    { id: 3, image: 'braco-m', nome: 'Braço', tempo: 10, caloria: 120, quant: 10 },
    { id: 4, image: 'pernas-m', nome: 'Pernas', tempo: 10, caloria: 120, quant: 10 },
    { id: 5, image: 'gluteos-m', nome: 'Glúteos', tempo: 10, caloria: 120, quant: 10 },
    { id: 6, image: 'cardio-m', nome: 'Cardío', tempo: 10, caloria: 120, quant: 10 },
    { id: 8, image: 'abdomen-m', nome: 'Abdomen', tempo: 10, caloria: 120, quant: 10 },
  ];

  const arrayF = [
    { id: 1, image: 'peitoral-f', nome: 'Peitoral', tempo: 10, caloria: 120, quant: 10 },
    { id: 2, image: 'ombros-f', nome: 'Ombros', tempo: 10, caloria: 120, quant: 10 },
    { id: 7, image: 'dorsal-f', nome: 'Dorsal', tempo: 10, caloria: 120, quant: 10 },
    { id: 3, image: 'braco-f', nome: 'Braço', tempo: 10, caloria: 120, quant: 10 },
    { id: 4, image: 'pernas-f', nome: 'Pernas', tempo: 10, caloria: 120, quant: 10 },
    { id: 5, image: 'gluteos-f', nome: 'Glúteos', tempo: 10, caloria: 120, quant: 10 },
    { id: 6, image: 'cardio-f', nome: 'Cardío', tempo: 10, caloria: 120, quant: 10 },
    { id: 8, image: 'abdomen-f', nome: 'Abdomen', tempo: 10, caloria: 120, quant: 10 },
  ];
  const [listaExercicio, setListaExercicio] = useState(stateUser.sexo === 'M' ? arrayM : arrayF);
  async function handleNewExercicio() {
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
    } finally{
      realm.close();
    }
  }
  return {
    listaExercicio,
    setListaExercicio,
  };
};
