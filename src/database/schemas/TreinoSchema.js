import uuid from 'react-native-uuid';

export const TreinoSchema = {
  name: 'Treinos',
  properties: {
    _id: 'string',
    treino: 'string',
    titulo: 'string',
    quant: 'int',
    tempo: 'int',
    calorias: 'float',
    grupo:'string',
    status:'string',
  },
  primaryKey: '_id',
};

export const TreinoInitial = {
  // _id: uuid.v4(),
  treino: '',
  titulo: '',
  quant: 0,
  tempo: 0,
  calorias: 0,
  grupo:'',
  status:'',
};
