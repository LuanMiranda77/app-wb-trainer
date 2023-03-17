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
  },
  primaryKey: '_id',
};
