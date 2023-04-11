import React, { createContext, useContext, useReducer } from 'react';

export const UserContext = createContext({});

const initialState = {
  nome: '',
  dataNascimento: null,
  genero: '',
  image: '',
  diasTreinos: '',
  objetivo: '',
  tipoPlano: 'premium',
  experiencia: '',
  altura: null,
  peso: null,
  bracoDireito: 0,
  bracoEsquerdo: 0,
  antebracoDireito: 0,
  antebracoEsquerdo: 0,
  pernaDireita: 0,
  pernaEsquerda: 0,
  cintura: 0,
  quadril: 0,
  peito: 0,
  gorduraCorporal: 0,
  treinoAtual: '',
  exercicios: [],
  isUserInicial:false,
};

// const { toastError, toastSucess } = Toast();

const actions = {
  new(state, action) {
    const user = action.payload;
    Object.assign(state, user );
    return state;
  },
  delete(state, action) {
    // logica de adicionar
  },
  update(state, action) {
    const user = action.payload;
    state = {...user};
    return state;
  },
  setGenero(state, action) {
    return {
      ...state,
      genero: action.payload,
    };
  },
  setUserInicial(state, action) {
    return {
      ...state,
      isUserInicial: action.payload,
    };
  },
  setTreinoAtual(state, action) {
    const treino = action.payload;
    return {
      ...state,
      treinoAtual: treino,
    };
  },
  setTreinos(state, action) {
    const exercicios = action.payload;
    return {
      ...state,
      exercicios: [...exercicios],
    };
  },
  addDiaTreinos(state, action) {
    const dia = action.payload;
    return {
      ...state,
      diasTreinos: state.diasTreinos !== '' ? state.diasTreinos + '-' + dia : dia,
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
