import Realm from 'realm';
import { ExercicioSchema } from './schemas/ExercicioSchema';

export const getRaelm = async () =>
  await Realm.open({
    path: 'wbtrainer-app',
    schema: [ExercicioSchema],
  });
