import uuid from 'react-native-uuid';

export const Treino_ExercicioSchema = {
  name: 'Treino_Exercicio',
  properties: {
    _id: 'string',
    treino: 'string',
    idExercicio: 'string',
    series: 'int',
    repeticoes: 'string',
    tempo: 'int',
    calorias: 'float',
    descanso: 'int',
    status: 'string',
  },
  primaryKey: '_id',
};

export const TreinoExercicioInitial = {
  // _id: uuid.v4(),
  treino: '',
  idExercicio: '',
  series: 0,
  repeticoes: '',
  tempo: 0,
  calorias: 0,
  descanso: 0,
  status:'',
};
