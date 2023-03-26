import uuid from 'react-native-uuid';

export const ExercicioSchema = {
  name: 'Exercise',
  properties: {
    _id: 'string',
    nome: 'string',
    titulo: 'string',
    image: 'string',
    grupo:'string',
    linkVideo:'string',
    info: 'string',
  },
  primaryKey: '_id',
};

export const ExercicioInitial = {
  // _id: uuid.v4(),
  nome: '',
  titulo: '',
  image: '',
  grupo:'',
  linkVideo:'',
  info: '',
};
