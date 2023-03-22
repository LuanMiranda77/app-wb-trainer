import Realm from 'realm';
import { ExercicioSchema } from './schemas/ExercicioSchema';
import { TreinoSchema } from './schemas/TreinoSchema';

export const getRaelm = async () =>
  await Realm.open({
    path: 'wbtrainer-app',
    schema: [ExercicioSchema, TreinoSchema],
    deleteRealmIfMigrationNeeded: true,
  });
  // await Realm.open({ schema: [ExercicioSchema,TreinoSchema], deleteRealmIfMigrationNeeded: true, })
