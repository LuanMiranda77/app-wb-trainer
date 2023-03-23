import uuid from 'react-native-uuid';

export const ExercicioSchema = {
  name: 'Exercicios',
  properties: {
    _id: 'string',
    nome: 'string',
    series: 'int',
    repeticoes: 'string',
    treino: 'string',
    info: 'string',
    titulo: 'string',
    image: 'string',
    grupo:'string',
    linkVideo:'string',
  },
  primaryKey: '_id',
};

export const ExercicioInitial = {
  // _id: uuid.v4(),
  nome: '',
  series: 0,
  repeticoes: '',
  treino: '',
  info: '',
  titulo: '',
  image: '',
  grupo:'',
  linkVideo:'',
};
