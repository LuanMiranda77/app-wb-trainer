import { useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { NivelUser } from '../../utils/constants';
import treinos from '../../__mooks/iniciantesM.json';

export function useHome() {
  const [treinos, setTreinos] = useState();
  const { stateUser } = useUserContext();
  const findTreinos = () => {
    let treinos = stateUser.dia;
     
  };
  return {
    findTreinos,
  };
}
