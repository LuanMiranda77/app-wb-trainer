import { useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { UsuarioInitial } from '../../database/schemas/UsuarioSchema';
import uuid from 'react-native-uuid';

export function useUserAplication() {
  const [user, setUser] = useState(UsuarioInitial);
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const { stateUser, dispatch } = useUserContext();

  const saveNew = async () => {
    const realm = await getRaelm();
    userNew = { ...stateUser };
    delete userNew.exercicios;
    realm.write(() => {
      userNew._id = uuid.v4();
      userNew.dataNascimento = new Date();
      realm.create(enumSchemas.USER_APLICATION, userNew);
    });
    userNew.exercicios = [];
    dispatch({ type: 'new', payload: userNew });
  };

  return {
    user,
    setUser,
    dia,
    setDia,
    mes,
    setMes,
    ano,
    setAno,
    saveNew,
  };
}
