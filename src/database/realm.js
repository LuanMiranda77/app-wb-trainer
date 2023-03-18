import Realm from 'realm';
import { ExercicioSchema, TreinoSchema } from './schemas/TreinoSchema';

export const getRaelm = async () =>
  await Realm.open({
    path: 'wbtrainer-app',
    schema: [ExercicioSchema, TreinoSchema],
  });
