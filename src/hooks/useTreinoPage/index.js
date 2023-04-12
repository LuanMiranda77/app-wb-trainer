import { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { TreinoInitial } from '../../database/schemas/TreinoSchema';
import { TreinoExercicioInitial } from '../../database/schemas/Treino_ExercicioSchema';

export function useTreinoPage() {
  const [loading, setLoading] = useState(false);
  const [treino, setTreino] = useState(TreinoInitial);
  const [treinoExercicio, setTreinoExercicio] = useState(TreinoExercicioInitial);
  const [listaTreino, setListaTreino] = useState([]);
  const [listaTreinoExercicio, setListaTreinoExercicio] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('new');
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalExcluir, setShowModaExcluir] = useState(false);
  const { stateUser, dispatch } = useUserContext();
  const { toastError, toastSucess } = Toast();
  const [totlTime, setTotalTime] = useState(0);
  const [totalCal, setTotalCal] = useState(0);

  const options = [{ id: 1, label: '', onPress: () => setShowModal(true) }];

  useEffect(() => {
    handleListTrainer();
  }, []);

  const handleNew = () => {
    let treinonew = { ...TreinoInitial };
    if (listaTreino.length == 0) {
      treinonew.treino = 'A';
    } else if (listaTreino.length == 1) {
      treinonew.treino = 'B';
    } else if (listaTreino.length == 2) {
      treinonew.treino = 'C';
    } else if (listaTreino.length == 3) {
      treinonew.treino = 'D';
    } else if (listaTreino.length == 4) {
      treinonew.treino = 'E';
    } else {
      treinonew.treino = 'F';
    }
    setTreino(treinonew);
    setTypeModal('new');
    setShowModal(true);
  };

  const handleSave = async () => {
    const realm = await getRaelm();
    try {
      if (typeModal == 'new') {
        let treinoNew = treino;
        realm.write(() => {
          treinoNew._id = uuid.v4();
          realm.create(enumSchemas.TREINO, treinoNew);
        });
        toastSucess('Cadastrado com sucesso.');
        dispatch({ type: 'addDiaTreinos', payload: treinoNew.treino });
        realm.close();
      } else {
        let object = realm.objectForPrimaryKey(enumSchemas.TREINO, treino._id);
        realm.write(() => {
          object.titulo = treino.titulo;
          object.grupo = treino.grupo;
        });
        toastSucess('Atualizado com sucesso.');
      }
      setLoading(false);
      setShowModal(false);
      handleListTrainer();
    } catch (error) {
      console.error(error);
      toastError('Algo deu errado ao salvar');
      realm.close();
      setLoading(false);
      setShowModal(false);
    }
  };

  const handleDelete = async () => {
    const realm = await getRaelm();
    let object = realm.objectForPrimaryKey(enumSchemas.TREINO, treino._id);
    try {
      realm.write(() => {
        realm.delete(object);
      });
      let array = realm
        .objects(enumSchemas.TREINO_EXERCIC)
        .filtered(`treino == '${treino.treino}'`);
      array.length > 0 &&
        realm.write(() => {
          realm.delete(array);
        });
      setShowModaExcluir(false);
      toastSucess('Excluido com sucesso!');
      handleListTrainer();
    } catch (error) {
      console.error(error);
      toastError('Algo deu errado ao salvar');
      realm.close();
    }
  };

  const handleDeletExercicio = async () => {
    const realm = await getRaelm();
    let object = realm.objectForPrimaryKey(enumSchemas.TREINO_EXERCIC, treinoExercicio._id);
    try {
      realm.write(() => {
        realm.delete(object);
      });
      let index = listaTreinoExercicio.findIndex(item => item._id == treinoExercicio._id);
      listaTreinoExercicio.splice(index,1);
      setListaTreinoExercicio([...listaTreinoExercicio]);
      setLoading(false);
      setShowModaExcluir(false);
      toastSucess('Excluido com sucesso!');
    } catch (error) {
      setLoading(false);
      console.error(error);
      toastError('Algo deu errado ao salvar');
      realm.close();
    }
  };

  const handleListTrainer = async () => {
    const realm = await getRaelm();
    let array = realm.objects(enumSchemas.TREINO).sorted('treino').toJSON();
    setListaTreino([...array]);
  };

  const handleListExercicioByTrainer = async (treino) => {
    const realm = await getRaelm();
    let time = 0;
    let kcal = 0;
    let array = realm
      .objects(enumSchemas.TREINO_EXERCIC)
      .filtered(`treino == '${treino}'`)
      // .sorted('nome')
      .toJSON();
    let lista = array.map((item) => {
      let exercicio = realm
        .objects(enumSchemas.EXERCICIO)
        .filtered(`_id == '${item._idExercicio}'`)
        .toJSON();
      item.obj = exercicio[0];
      time += item.tempo;
      kcal += item.calorias;
      return item;
    });

    setTotalTime(time);
    setTotalCal(kcal);
    setListaTreinoExercicio([...lista]);
    // realm.close();
  };

  return {
    loading, 
    setLoading,
    showModal,
    setShowModal,
    typeModal,
    setTypeModal,
    showModalAdd,
    setShowModalAdd,
    showModalExcluir,
    setShowModaExcluir,
    treino,
    setTreino,
    listaTreino,
    setListaTreino,
    listaTreinoExercicio,
    totlTime,
    setTotalTime,
    totalCal,
    setTotalCal,
    treinoExercicio, 
    setTreinoExercicio,
    setListaTreinoExercicio,
    handleNew,
    handleSave,
    handleListTrainer,
    handleListExercicioByTrainer,
    handleDelete,
    handleDeletExercicio,
  };
}
