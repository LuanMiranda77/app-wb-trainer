import { useMemo, useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { NivelUser } from '../../utils/enums';
// MET:
// Andar de bicicleta a 16 km/h: 3.0 MET
// Andar de bicicleta a 20 km/h: 5.5 MET
// Correr a 8 km/h: 8.0 MET
// Andar de bicicleta a 24 km/h: 8.5 MET
// Corrida a 12 km/h: 11.0 MET
// Levantamento de peso: 6.0 MET

export const useCardTreino = () => {
  const [listaTreino, setListaTreino] = useState([]);
  const { stateUser, dispatch } = useUserContext();
  // setListaTreino(treinos);

  const calculoTempoTreino = (treino) => {
    let tempoExercicio = 0;
    let quantSeries = 0;
    let descanso = 0;
    treino.forEach((element) => {
      quantSeries += element.series;
    });
    if (stateUser.experiencia === NivelUser.INICIATE) {
      descanso = quantSeries * 60;
      tempoExercicio = treino.length * 200;
    } else if (stateUser.experiencia === NivelUser.INTERMEDIARIO) {
      descanso = quantSeries * 50;
      tempoExercicio = treino.length * 300;
    } else if (stateUser.experiencia === NivelUser.AVANCADO) {
      descanso = quantSeries * 40;
      tempoExercicio = treino.length * 450;
    } else if (stateUser.experiencia === NivelUser.PROFISSIONAL) {
      descanso = quantSeries * 30;
      tempoExercicio = treino.length * 600;
    }
    let minuto = (tempoExercicio + descanso) / 60;
    return minuto.toFixed(0);
  };

  const calcCaloriaTreino = (tempo) => {
    return stateUser.peso * 6.0 * (tempo / 60);
  };

  const processarTreino = () => {
    let treinos = [];
    let treinoA = stateUser.exercicios.filter((item) => item.treino === 'A');
    let treinoB = stateUser.exercicios.filter((item) => item.treino === 'B');
    let treinoC = stateUser.exercicios.filter((item) => item.treino === 'C');
    let treinoD = stateUser.exercicios.filter((item) => item.treino === 'D');
    let treinoE = stateUser.exercicios.filter((item) => item.treino === 'E');
    let treinoF = stateUser.exercicios.filter((item) => item.treino === 'F');

    if (treinoA.length > 0) {
      let tempo = calculoTempoTreino(treinoA);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 1,
        treino: treinoA[0].treino,
        titulo: treinoA[0].titulo,
        quant: treinoA.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    if (treinoB.length > 0) {
      let tempo = calculoTempoTreino(treinoB);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 2,
        treino: treinoB[0].treino,
        titulo: treinoB[0].titulo,
        quant: treinoB.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    if (treinoC.length > 0) {
      let tempo = calculoTempoTreino(treinoC);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 3,
        treino: treinoC[0].treino,
        titulo: treinoC[0].titulo,
        quant: treinoC.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    if (treinoD.length > 0) {
      let tempo = calculoTempoTreino(treinoD);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 4,
        treino: treinoD[0].treino,
        titulo: treinoD[0].titulo,
        quant: treinoD.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    if (treinoE.length > 0) {
      let tempo = calculoTempoTreino(treinoE);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 5,
        treino: treinoE[0].treino,
        titulo: treinoE[0].titulo,
        quant: treinoE.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    if (treinoF.length > 0) {
      let tempo = calculoTempoTreino(treinoF);
      let calorias = calcCaloriaTreino(tempo);
      let treino = {
        id: 6,
        treino: treinoF[0].treino,
        titulo: treinoF[0].titulo,
        quant: treinoF.length,
        tempo: tempo,
        calorias: calorias,
      };
      treinos.push(treino);
    }
    setListaTreino([...treinos]);
  };

  useMemo(() => {
    processarTreino();
  }, []);

  return {
    listaTreino,
    setListaTreino,
    processarTreino,
  };
};
