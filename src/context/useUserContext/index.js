import React, { createContext, useContext, useReducer } from 'react';
import { NivelUser } from '../../utils/constants';
import arrayTreino from '../../__mooks/iniciantesM.json';

export const UserContext = createContext({});
const initialState = {
  id: 1,
  nome: 'Silvia Maria da Costa',
  idade: 30,
  genero: 'F',
  altura: 175,
  peso: 80,
  diasTreinos: [
    { id: 1, nome: 'A', titulo: 'Costas' },
    { id: 2, nome: 'B', titulo: 'Pernas' },
    { id: 3, nome: 'C', titulo: 'Bunda' },
  ],
  objetivo: 'perder peso',
  tipoPlano: 'premium',
  experiencia: NivelUser.INICIATE,
  personalTrainer: {
    nome: 'Maria Souza',
    experiencia: 8,
    especialidade: 'treinamento de força',
    email: 'maria.souza@pt.com',
    telefone: '+55 (11) 5555-1234',
  },
  medidasCorporais: {
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
  },
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
