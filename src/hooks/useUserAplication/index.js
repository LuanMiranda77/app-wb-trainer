import { useState } from 'react';
import uuid from 'react-native-uuid';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { UsuarioInitial } from '../../database/schemas/UsuarioSchema';
import { NivelUser } from '../../utils/enums';
import grupoMuscular from '../../__mooks/grupoMuscular.json';
import RNRestart from 'react-native-restart';
import { TreinoInitial } from '../../database/schemas/TreinoSchema';

export function useUserAplication() {
  const [user, setUser] = useState(UsuarioInitial);
  const [show, setShow] = useState(false);
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const { stateUser, dispatch } = useUserContext();
  const { toastSucess, toastError } = Toast();

  const createStateUser = () => {
    setUser({ ...user, dataNascimento: new Date(`${ano}-${mes}-${dia}`) });
    dispatch({ type: 'new', payload: user });
  };

  const isValidDate = (dia, mes, ano) => {
    return parseInt(dia) > 31 ||
      parseInt(mes) > 12 ||
      parseInt(ano) < 1950 ||
      (parseInt(dia) > 29 && parseInt(mes) == 2)
      ? false
      : true;
  };

  const saveNew = async () => {
    setShow(true);
    userNew = { ...stateUser };
    delete userNew.exercicios;
    try {
        userNew._id = uuid.v4();
        switch (stateUser.experiencia) {
          case NivelUser.INICIATE:
            userNew.diasTreinos = 'A-B-C-D';
            await inicianteUser(userNew);
            break;
          case NivelUser.INTERMEDIARIO:
            userNew.diasTreinos = 'A-B-C-D-E';
            await inicianteUser(userNew);
            break;
          case NivelUser.AVANCADO:
            userNew.diasTreinos = 'A-B-C-D-E-F';
            await avancadoUser(userNew);
            break;
        }
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  };

  async function inicianteUser(user) {
    const realm = await getRaelm();
    
    let treinos = [];
    let treinoExercicios = [];

    let dias = user.diasTreinos.split('-');
    for (let i = 0; i < dias.length; i++) {
      
      let treino = {... TreinoInitial}
      treino.treino=dias[i];

      switch (user.genero) {
        case 'M':
          treino.titulo =
            i == 0
              ? grupoMuscular[0].value + ' e ' + grupoMuscular[3].value
              : i == 1
              ? grupoMuscular[2].value + ' e ' + grupoMuscular[4].value
              : i == 2
              ? grupoMuscular[6].value +
                ', ' +
                grupoMuscular[7].value +
                ' e ' +
                grupoMuscular[8].value
              : grupoMuscular[1].value +
                ', ' +
                grupoMuscular[12].value +
                ' e ' +
                grupoMuscular[11].value;
          treino.grupo = i == 0 ? 'Peitoral' : i == 1 ? 'Costas' : i == 2 ? 'Pernas' : 'Ombros';
          break;

        case 'F':
          treino.titulo =
            i == 0
              ? //treino A
                grupoMuscular[6].value + ' e ' + grupoMuscular[7].value
              : i == 1
              ? // treino B
                grupoMuscular[9].value + ' e ' + grupoMuscular[8].value
              : i == 2
              ? // treino C
                grupoMuscular[0].value +
                ', ' +
                grupoMuscular[2].value +
                ', ' +
                grupoMuscular[6].value +
                ' e ' +
                grupoMuscular[3].value
              : // treino D
                grupoMuscular[9].value +
                ', ' +
                grupoMuscular[10].value +
                ' e ' +
                grupoMuscular[11].value;
          treino.grupo = i == 0 ? 'Pernas' : i == 1 ? 'Glúteos' : i == 2 ? 'Pernas' : 'Peitoral';

          if (i == 0) {
            let listExercicio =  realm
              .objects(enumSchemas.EXERCICIO)
              .filtered(
                'nome == "Cadeira Extensora" OR nome == "Mesa Flexora" OR nome == "Leg Press 45º"  OR nome == "Panturrilha em pé no aparelho"'
              )
              .toJSON();
            listExercicio.forEach((exercicio) => {

              let treinoExercicio = {
                treino: dias[i],
                _idExercicio: '',
                exercicio: '',
                series: 3,
                repeticoes: '10',
                tempo: 0,
                calorias: 0.0,
                descanso: 60,
                status: '',
                carga: 0.0,
                obs:'',
              };
              
              treinoExercicio._idExercicio = exercicio._id;
              treinoExercicio.exercicio = exercicio.nome;
              // treinoExercicio.carga=15.00
              let tempDescanso = treinoExercicio.series * treinoExercicio.descanso;
              let minuto =(1 * 200 + tempDescanso) / 60;
              let calorias = user.peso * 6.0 * (minuto / 60);
              treinoExercicio.tempo = minuto;
              treinoExercicio.calorias = calorias;
              treinoExercicios.push(treinoExercicio);
              treino.quant+=1;
              treino.tempo+=minuto
              treino.calorias+=treinoExercicio.calorias
            });
          }

          break;
      }

      treinos.push(treino);
    }
    
    try {
      realm.write(async () => {

        treinos.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO, treino);
        });

        treinoExercicios.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO_EXERCIC, treino);
        });
        delete user.isUserInicial;
        await realm.create(enumSchemas.USER_APLICATION, user);

        setTimeout(
          function () {
            setShow(false);
            dispatch({ type: 'setUserInicial', payload: false });
            // RNRestart.Restart();
          }.bind(this),
          5000
        );

      });

      

     
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  }

  async function intermediarioUser(user) {
    
    const realm = await getRaelm();

    let treinos = [];
    let treinoExercicios = [];

    let dias = user.diasTreinos.split('-');
    
    
    try {
      realm.write(async () => {

        treinos.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO, treino);
        });

        treinoExercicios.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO_EXERCIC, treino);
        });
        delete user.isUserInicial;
        await realm.create(enumSchemas.USER_APLICATION, user);

        setTimeout(
          function () {
            setShow(false);
            dispatch({ type: 'setUserInicial', payload: false });
            // RNRestart.Restart();
          }.bind(this),
          5000
        );

      });

      

     
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  }

  async function avancadoUser(user) {
    
    const realm = await getRaelm();
    
    let treinos = [];
    let treinoExercicios = [];

    let dias = user.diasTreinos.split('-');
    
    
    try {
      realm.write(async () => {

        treinos.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO, treino);
        });

        treinoExercicios.forEach((treino) => {
          treino._id = uuid.v4();
          realm.create(enumSchemas.TREINO_EXERCIC, treino);
        });
        delete user.isUserInicial;
        await realm.create(enumSchemas.USER_APLICATION, user);

        setTimeout(
          function () {
            setShow(false);
            dispatch({ type: 'setUserInicial', payload: false });
            // RNRestart.Restart();
          }.bind(this),
          5000
        );

      });
     
    } catch (error) {
      console.error(error);
      toastError(error.message);
    }
  }

  return {
    user,
    setUser,
    dia,
    setDia,
    mes,
    setMes,
    ano,
    setAno,
    saveNew,
    isValidDate,
    show, 
    setShow,
  };
}
