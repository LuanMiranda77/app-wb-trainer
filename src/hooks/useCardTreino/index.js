import { useState } from 'react';

export const treinos = [
    {
        id: 1,
        treino: 'Treino A',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: 'https://www.blog.nadarte.com/wp-content/uploads/2019/05/original-1e3a108bc2492ffcf185cb689ba8b6fc-1160x770.jpg',
    },
    {
        id: 2,
        treino: 'Treino B',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-2.jpg',
    },
    {
        id: 3,
        treino: 'Treino C',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-3.jpg',
    },
    {
        id: 4,
        treino: 'Treino D',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-4.jpg',
    },
    {
        id: 5,
        treino: 'Treino E',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-5.jpg',
    },
    {
        id: 6,
        treino: 'Treino F',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-6.jpg',
    },
    {
        id: 7,
        treino: 'Treino E',
        grupo: 'Peito / Bíceps',
        tempo: 60,
        caloria: 1500,
        exercicio: 12,
        image: '../../assets/h-7.jpg',
    },
];

export const useCardTreino = () => {
    const [listaTreino, setListaTreino] = useState();
    let treinos = [
        {
            id: 1,
            treino: 'Treino A',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-1.jpg',
        },
        {
            id: 2,
            treino: 'Treino B',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-2.jpg',
        },
        {
            id: 3,
            treino: 'Treino C',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-3.jpg',
        },
        {
            id: 4,
            treino: 'Treino D',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-4.jpg',
        },
        {
            id: 5,
            treino: 'Treino E',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-5.jpg',
        },
        {
            id: 6,
            treino: 'Treino F',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-6.jpg',
        },
        {
            id: 7,
            treino: 'Treino E',
            grupo: 'Peito / Bíceps',
            tempo: 60,
            caloria: 1500,
            exercicio: 12,
            image: '../../assets/h-7.jpg',
        },
    ];
    setListaTreino(treinos);

    return {
        listaTreino,
        setListaTreino,
    };
};
