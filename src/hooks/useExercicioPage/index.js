import { useState } from 'react';
import { File } from 'react-native';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { getRaelm } from '../../database/realm';
import { ExercicioInitial } from '../../database/schemas/ExercicioSchema';
import exercicios from '../../__mooks/exercicios.json';
import { arrayF, arrayM } from './grupoExercicios';
import Realm from 'realm';

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
  const {toastError, toastSucess} = Toast();

  async function handleSave() {
    console.log("aqui", exercicio)
    if(exercicio.nome==''){
      toastError('Nome é obrigatorio');
      return
    }
    else if(exercicio.grupo==''){
      toastError('Grupo é obrigatorio');
      return
    }
    const realm = await getRaelm();
    try {
      realm.write(() => {
        realm.create('Exercicios', exercicio);
      });
      realm.close();
      toastSucess('Item cadastrado com sucesso.');
    } catch (error) {
      console.error(error)
      toastError('Algo deu errado ao salvar');
      realm.close();
    }
  }
  async function handleDeleteExercicio() {
    const realmPath = '/path/to/wbtrainer-app.realm';
    try {
      await Realm.deleteFile({ path: realmPath });
      console.log(`Successfully deleted ${realmPath}`);
  } catch (error) {
      console.error(`Failed to delete ${realmPath}:`, error);
  }
  }

  async function handlefindExercicios(grupoCorpo) {
    let array = [];
    if (grupoCorpo === 'Braço') {
      array = exercicios.filter(
        (item) => item.grupo == 'Bíceps' || item.grupo == 'Tríceps' || item.grupo == 'Antebranço'
      );
    } else {
      array = exercicios.filter((item) => item.grupo == grupoCorpo);
    }
    setListaExercicio([...array]);
  }

  return {
    listaExercicio,
    setListaExercicio,
    gruposCorpo,
    setGruposCorpo,
    showModal,
    setShowModal,
    exercicio,
    setExercicio,
    handleNew,
    typeModal,
    setTypeModal,
    handleSave,
    handlefindExercicios,
    handleDeleteExercicio,
  };
};
