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
// import exercicios from '../../__mooks/exercicios.json';
import { arrayF, arrayM } from './grupoExercicios';

export const useExercicioPage = () => {
  const [loading, setLoading] = useState(false);
  const { stateUser } = useUserContext();
  const [exercicio, setExercicio] = useState(ExercicioInitial);
  const [treinoExercicio, setTreinoExercicio] = useState(TreinoExercicioInitial);
  const [listaExercicio, setListaExercicio] = useState([]);
  const [gruposCorpo, setGruposCorpo] = useState(stateUser.sexo === 'M' ? arrayM : arrayF);
  const [grupoCorpo, setGrupoCorpo] = useState();
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('new');
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalLista, setShowModalLista] = useState(false);
  const { toastError, toastSucess } = Toast();

  const handleNew = () => {
    setExercicio(ExercicioInitial);
    setTypeModal('new');
    setShowModal(true);
  };

  async function handleSave() {
    if (exercicio.nome == '') {
      toastError('Nome é obrigatorio');
      return;
    } else if (exercicio.grupo == '') {
      toastError('Grupo é obrigatorio');
      return;
    }

    setLoading(true);

    const realm = await getRaelm();
    try {
      if (typeModal == 'new') {
        realm.write(() => {
          let exercicioNew = { ...exercicio };
          exercicioNew._id = uuid.v4();
          realm.create(enumSchemas.EXERCICIO, exercicioNew);
        });
        toastSucess('Cadastrado com sucesso.');
        // realm.close();
      } else {
        let object = realm.objectForPrimaryKey(enumSchemas.EXERCICIO, exercicio._id);
        realm.write(() => {
          object.nome = exercicio.nome;
          object.titulo = exercicio.titulo;
          object.image = exercicio.image;
          object.grupo = exercicio.grupo;
          object.info = exercicio.info;
          object.linkVideo = exercicio.linkVideo;
        });
        toastSucess('Atualizado com sucesso.');
      }
      setLoading(false);
      setShowModal(false);
      handlefindExercicios(exercicio.grupo);
    } catch (error) {
      console.error(error);
      toastError('Algo deu errado ao salvar');
      realm.close();
      setLoading(false);
      setShowModal(false);
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
    let exercicios = [];
    if(!grupoCorpo){
      return
    }
    const realm = await getRaelm();
    try {
      
      if (
        grupoCorpo === 'Braço' ||
        grupoCorpo === 'Bíceps' ||
        grupoCorpo === 'Tríceps' ||
        grupoCorpo === 'Antebraço'
      ) {
        exercicios = realm
          .objects(enumSchemas.EXERCICIO)
          .filtered('grupo == "Bíceps" OR grupo == "Tríceps" OR grupo == "Antebraço"')
          .sorted('nome')
          .toJSON();
      } else if (
        grupoCorpo === 'Pernas' ||
        grupoCorpo === 'Quadríceps' ||
        grupoCorpo === 'Posterior' ||
        grupoCorpo === 'Panturilha'
      ) {
        exercicios = realm
          .objects(enumSchemas.EXERCICIO)
          .filtered('grupo == "Quadríceps" OR grupo == "Posterior" OR grupo == "Panturilhas" OR grupo == "Pernas"')
          .sorted('nome')
          .toJSON();
      } else if (grupoCorpo === 'Dorsal' || grupoCorpo === 'Dorsal' || grupoCorpo === 'Trapézio') {
        exercicios = realm
          .objects(enumSchemas.EXERCICIO)
          .filtered('grupo == "Dorsal" OR grupo == "Trapézio"')
          .sorted('nome')
          .toJSON();
      } else {
        exercicios = realm
          .objects(enumSchemas.EXERCICIO)
          .filtered(`grupo == '${grupoCorpo}'`)
          .sorted('nome')
          .toJSON();
      }
      setListaExercicio([...exercicios]);
      // realm.close();
      //Glúteos, Pernas
    } catch (error) {
      console.error(error);
      toastError('Algo deu errado...');
      realm.close();
    }
  }

  async function handlefindExerciciosSearch(searchRequest) {
    const realm = await getRaelm();
    let array = realm
      .objects(enumSchemas.EXERCICIO)
      .filtered(
        `nome CONTAINS[c] "${searchRequest.toLowerCase()}" OR grupo CONTAINS[c] "${searchRequest.toLowerCase()}"`
      )
      .sorted('nome')
      .toJSON();
    // realm.close();
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
    }else if (treinoExercicio.carga === 0) {
      toastError('Digite o número da carga kg');
      return;
    }
    const tempo = calculoTempoExercicio(treinoExercicio);
    const calorias = calculoCaloriasExercicio(tempo);

    let exercicioSalvo = { ...treinoExercicio };
  
    exercicioSalvo.tempo = parseInt(tempo);
    exercicioSalvo.calorias = parseFloat(calorias);

    const realm = await getRaelm();
    try {
      let isEdit=false;
      realm.write(() => {
        if(!exercicioSalvo._id){
          exercicioSalvo._id =  uuid.v4();
          realm.create(enumSchemas.TREINO_EXERCIC, exercicioSalvo);
        }else{
          let object = realm.objectForPrimaryKey(enumSchemas.TREINO_EXERCIC, exercicioSalvo._id);
          object.treino= exercicioSalvo.treino;
          object.series= exercicioSalvo.series;
          object.repeticoes= exercicioSalvo.repeticoes;
          object.tempo= exercicioSalvo.tempo;
          object.calorias= exercicioSalvo.calorias;
          object.descanso= exercicioSalvo.descanso;
          object.carga= exercicioSalvo.carga;
          object.obs= exercicioSalvo.obs;
          isEdit=true;
        }
      });
      let treino = realm
        .objects(enumSchemas.TREINO)
        .filtered(`treino == '${exercicioSalvo.treino}'`)
        .toJSON();
      if(treino.length > 0){
        let object = realm.objectForPrimaryKey(enumSchemas.TREINO, treino[0]._id);
        realm.write(() => {
          object.quant = object.quant + 1;
          object.tempo = object.tempo + exercicioSalvo.tempo;
          object.calorias = object.tempo + exercicioSalvo.calorias;
        });
      }

      // realm.close();
      setShowModalAdd(false);
      toastSucess(isEdit ? 'Exercicio editado com sucesso.':'Exercicio adicionado com sucesso.');
    } catch (error) {
      // realm.close();
      setShowModalAdd(false);
      console.error(error);
      toastError('Algo deu errado ao salvar');
    }
  }

  const calculoTempoExercicio = (treinoExercicio) => {

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
    showModalLista, 
    setShowModalLista,
    grupoCorpo, 
    setGrupoCorpo,
  };
};
