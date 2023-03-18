import uuid from 'react-native-uuid';

export const ExercicioSchema = {
  name: 'Exercicio',
  properties: {
    _id: 'int',
    nome: 'string',
    series: 'int',
    repeticoes: 'string',
    treino: 'string',
    info: 'string',
    titulo: 'string',
    image: 'string',
  },
  primaryKey: '_id',
};

export const ExercicioInitial = {
  _id: uuid.v4(),
  nome: '',
  series: '',
  repeticoes: '',
  treino: '',
  info: '',
  titulo: '',
  image: '',
};
