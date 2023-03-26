import { useState } from 'react';
import uuid from 'react-native-uuid';
import Realm from 'realm';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { ExercicioInitial } from '../../database/schemas/ExercicioSchema';
import { TreinoExercicioInitial } from '../../database/schemas/Treino_ExercicioSchema';
import { NivelUser } from '../../utils/enums';
import exercicios from '../../__mooks/exercicios.json';
import { arrayF, arrayM } from './grupoExercicios';

export const useExercicioPage = () => {
  const { stateUser } = useUserContext();
  const [exercicio, setExercicio] = useState(ExercicioInitial);
  const [treinoExercicio, setTreinoExercicio] = useState(TreinoExercicioInitial);
  const [listaExercicio, setListaExercicio] = useState([]);
  const [gruposCorpo, setGruposCorpo] = useState(stateUser.sexo === 'M' ? arrayM : arrayF);
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('new');
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleNew = () => {
    setExercicio(ExercicioInitial);
    setTypeModal('new');
    setShowModal(true);
  };
  const { toastError, toastSucess } = Toast();

  async function handleSave() {
    console.log('aqui', exercicio);
    if (exercicio.nome == '') {
      toastError('Nome é obrigatorio');
      return;
    } else if (exercicio.grupo == '') {
      toastError('Grupo é obrigatorio');
      return;
    }
    const realm = await getRaelm();
    try {
      realm.write(() => {
        realm.create(enumSchemas.EXERCICIO, exercicio);
      });
      realm.close();
      toastSucess('Item cadastrado com sucesso.');
    } catch (error) {
      console.error(error);
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
    } else if (grupoCorpo === 'Pernas') {
      array = exercicios.filter(
        (item) =>
          item.grupo == 'Quadríceps' || item.grupo == 'Posterior' || item.grupo == 'Panturilha'
      );
    } else if (grupoCorpo === 'Dorsal') {
      array = exercicios.filter((item) => item.grupo == 'Dorsal' || item.grupo == 'Trapézio');
    } else {
      array = exercicios.filter((item) => item.grupo == grupoCorpo);
    }
    setListaExercicio([...array]);
  }

  async function handlefindExerciciosSearch(searchRequest) {
    let array = exercicios.filter(
      (item) =>
        item.nome.toLowerCase().includes(searchRequest) ||
        item.grupo.toLowerCase().includes(searchRequest)
    );
    setListaExercicio([...array]);
  }

  async function handleAddExercicioByTreino() {
    if (treinoExercicio.treino === '') {
      toastError('Selecione um dia de treino!');
      return;
    } else if (treinoExercicio.repeticoes === '') {
      toastError('Digite as repetições!');
      return;
    } else if (treinoExercicio.series === 0) {
      toastError('Digite o número de series!');
      return;
    } else if (treinoExercicio.descanso === 0) {
      toastError('Selecione o tempo de descanso!');
      return;
    }
    const tempo = calculoTempoExercicio(treinoExercicio);
    const calorias = calculoCaloriasExercicio(tempo);

    let exercicioSalvo = {...treinoExercicio}

    exercicioSalvo._id = uuid.v4();
    exercicioSalvo.tempo = parseInt(tempo);
    exercicioSalvo.calorias = parseFloat(calorias);

    const realm = await getRaelm();
    try {
      realm.write(() => {
        realm.create(enumSchemas.TREINO_EXERCIC, exercicioSalvo);
      });
      realm.close();
      setShowModalAdd(false);
      toastSucess('Exercicio adicionado com sucesso.');
    } catch (error) {
      realm.close();
      setShowModalAdd(false);
      console.error(error);
      toastError('Algo deu errado ao salvar');
    }
  }

  const calculoTempoExercicio = (treinoExercicio) => {
    console.log(treinoExercicio);
    let tempoExercicio = 0;
    let descanso = 0;

    if (stateUser.experiencia === NivelUser.INICIATE) {
      descanso = treinoExercicio.series * treinoExercicio.descanso;
      tempoExercicio = 1 * 200;
    } else if (stateUser.experiencia === NivelUser.INTERMEDIARIO) {
      descanso = treinoExercicio.series * treinoExercicio.descanso;
      tempoExercicio = 1 * 300;
    } else {
      descanso = treinoExercicio.series * treinoExercicio.descanso;
      tempoExercicio = 1 * 450;
    }

    let minuto = (tempoExercicio + descanso) / 60;
    return minuto.toFixed(0);
  };
  const calculoCaloriasExercicio = (tempo) => {
    return stateUser.peso * 6.0 * (tempo / 60);
  };

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
    showModalAdd,
    setShowModalAdd,
    treinoExercicio,
    setTreinoExercicio,
    handleSave,
    handlefindExercicios,
    handleDeleteExercicio,
    handlefindExerciciosSearch,
    handleAddExercicioByTreino,
  };
};
