import Realm from 'realm';
import { ExercicioSchema } from './schemas/ExercicioSchema';
import { TreinoSchema } from './schemas/TreinoSchema';

const schemaVersion = 1;

const migration = (oldRealm, newRealm) => {
  if (oldRealm.schemaVersion < 2) {
    const oldExercicios = oldRealm.objectType('Exercicio');
    // const newExercicioSchema = newRealm.schema.find((s) => s.name === 'Exercicio');
    const newExercicios = newRealm.objects('Exercicio');

    for (let i = 0; i < oldExercicios.length; i++) {
      const oldExercicio = oldExercicios[i];
      const newExercicio = newExercicios[i];
      // copy the old data to the new object
      newExercicio.novo_id = oldExercicio._id;
      // set the new primary key
      newExercicio._id = oldExercicio._id.toString();
    }

    const oldTreinoSchema = oldRealm.objectType('Treino');
    const newTreinoSchema = newRealm.objects('Exercicio');

    for (let i = 0; i < oldTreinoSchema.length; i++) {
      const oldTreino = oldTreinoSchema[i];
      const newTreino = newTreinoSchema[i];

      // copy the old data to the new object
      newTreino.novo_id = oldTreino._id;
      // set the new primary key
      newTreino._id = oldTreino._id.toString();
    //   const newTreino = newRealm.create('Treino',
    //     {
          
    //       _id: oldTreino._id.toString(),
    //     },
    //     true
    //   );
    }
  }
};

export const getRaelm = async () =>
  await Realm.open({
    path: 'wbtrainer-app',
    schemaVersion,
    schema: [ExercicioSchema],
    migration,
    // deleteRealmIfMigrationNeeded: true,
  });
  // await Realm.open({ schema: [ExercicioSchema,TreinoSchema], deleteRealmIfMigrationNeeded: true, })
