import { useState } from 'react';
import { treinos } from '../../__mooks';

export const useCardTreino = () => {
  
  const [listaTreino, setListaTreino] = useState(treinos);
  // setListaTreino(treinos);

  return {
    listaTreino,
    setListaTreino,
  };
};
