import { useUserContext } from '../context/useUserContext';
import { NivelUser } from './enums';

const { stateUser } = useUserContext();

export const calculoTempoExercicio = (treinoExercicio) => {
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
export const calculoCaloriasExercicio = (tempo) => {
  return stateUser.peso * 6.0 * (tempo / 60);
};

export const  isValidDate = (dia, mes, ano) => {
  return parseInt(dia) > 31 ||
    parseInt(mes) > 12 ||
    parseInt(ano) < 1950 ||
    (parseInt(dia) > 29 && parseInt(mes) == 2) ||
    ano >= new Date().getFullYear()
    ? false
    : true;
}
