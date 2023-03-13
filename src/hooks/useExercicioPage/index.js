import { useState } from 'react';

export const useExercicioPage = () => {
    const array = [
        { id: 1, image: '', nome: 'Peitoral', tempo: 10, caloria: 120 },
        { id: 2, image: '', nome: 'Ombros', tempo: 10, caloria: 120 },
        { id: 7, image: '', nome: 'Dorsal', tempo: 10, caloria: 120 },
        { id: 3, image: '', nome: 'Braço', tempo: 10, caloria: 120 },
        { id: 4, image: '', nome: 'Pernas', tempo: 10, caloria: 120 },
        { id: 5, image: '', nome: 'Glúteo', tempo: 10, caloria: 120 },
        { id: 6, image: '', nome: 'Cardío', tempo: 10, caloria: 120 },
        { id: 8, image: '', nome: 'Abdomen', tempo: 10, caloria: 120 },
    ];
    const [listaExercicio, setListaExercicio] = useState(array);

    return {
        listaExercicio,
        setListaExercicio,
    };
};
