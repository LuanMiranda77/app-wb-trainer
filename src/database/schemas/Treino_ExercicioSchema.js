import uuid from 'react-native-uuid';

export const Treino_ExercicioSchema = {
  name: 'Treino_Exercicio',
  properties: {
    _id: 'string',
    treino: 'string',
    _idExercicio: 'string',
    exercicio: 'string',
    series: 'int',
    repeticoes: 'string',
    tempo: 'int',
    calorias: 'float',
    descanso: 'int',
    status: 'string',
    carga: 'float',
    obs: 'string',
  },
  primaryKey: '_id',
};

export const TreinoExercicioInitial = {
  // _id: uuid.v4(),
  treino: '',
  _idExercicio: '',
  series: 0,
  repeticoes: '',
  tempo: 0,
  calorias: 0,
  descanso: 0,
  status:'',
  carga: 0.00,
  obs: '',
};
