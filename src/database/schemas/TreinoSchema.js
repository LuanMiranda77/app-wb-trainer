import uuid from 'react-native-uuid';

export const TreinoSchema = {
  name: 'Treino',
  properties: {
    _id: 'string',
    treino: 'string',
    titulo: 'string',
    quant: 'int',
    tempo: 'int',
    calorias: 'float',
  },
  primaryKey: '_id',
};

export const TreinoInitial = {
  _id: uuid.v4(),
  treino: '',
  titulo: '',
  quant: 0,
  tempo: 0,
  calorias: 0,
};
