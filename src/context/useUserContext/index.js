import React, { createContext, useContext, useReducer } from 'react';
import { NivelUser } from '../../utils/enums';
import arrayTreino from '../../__mooks/avancadoM.json';

export const UserContext = createContext({});
const initialState = {
  id: 1,
  nome: 'Silvia Maria da Costa',
  dataNascimento: '23/05/1990',
  genero: 'F',
  image: '',
  diasTreinos: 'A-B-C-D',
  objetivo: 'perder peso',
  tipoPlano: 'premium',
  experiencia: NivelUser.AVANCADO,
  altura: 175,
  peso: 80,
  bracoDireito: 35,
  bracoEsquerdo: 34,
  antebracoDireito: 35,
  antebracoEsquerdo: 34,
  pernaDireita: 60,
  pernaEsquerda: 61,
  cintura: 85,
  quadril: 100,
  peito: 100,
  gorduraCorporal: 20,
  treinoAtual: 'A',
  exercicios: [...arrayTreino],
};

const actions = {
  new(state, action) {
    // logica de adicionar
  },
  delete(state, action) {
    // logica de adicionar
  },
  update(state, action) {
    // logia de adicinar
  },
  setTreinoAtual(state, action) {
    const treino = action.playload;
    return {
      ...state,
      treinoAtual: treino,
    };
  },
  setTreinos(state, action) {
    const exercicios = action.playload;
    return {
      ...state,
      exercicios: [...exercicios],
    };
  },
};

export function UserProvider({ children }) {
  function reducer(state, action) {
    const func = actions[action.type];
    return func ? func(state, action) : state;
  }

  const [stateUser, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ stateUser, dispatch }}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);
