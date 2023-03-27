import { FormControl } from 'native-base';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import InputIncrement from '../../components/inputs/inputIncrement';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import { useUserContext } from '../../context/useUserContext';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import { colorSecondary, colorSubtitle, stylesGlobal } from '../../styles';
import { temposDescansos } from './arrayDescaso';
import { ButtonTreino } from './styles';

// import { Container } from './styles';

function ModalAddTreino({ exercicio, showModal, onCloseModal }) {
  const [colorTreinoA, setColorTreinoA] = useState(false);
  const [colorTreinoB, setColorTreinoB] = useState(false);
  const [colorTreinoC, setColorTreinoC] = useState(false);
  const [colorTreinoD, setColorTreinoD] = useState(false);
  const [colorTreinoE, setColorTreinoE] = useState(false);
  const [colorTreinoF, setColorTreinoF] = useState(false);

  const { treinoExercicio, setTreinoExercicio, handleAddExercicioByTreino } = useExercicioPage();
  const { stateUser } = useUserContext();

  const onAtivedTreino = (treino) => {
    switch (treino) {
      case 'A':
        setColorTreinoA(true);
        setColorTreinoB(false);
        setColorTreinoC(false);
        setColorTreinoD(false);
        setColorTreinoE(false);
        setColorTreinoF(false);
        break;
      case 'B':
        setColorTreinoA(false);
        setColorTreinoB(true);
        setColorTreinoC(false);
        setColorTreinoD(false);
        setColorTreinoE(false);
        setColorTreinoF(false);
        break;
      case 'C':
        setColorTreinoA(false);
        setColorTreinoB(false);
        setColorTreinoC(true);
        setColorTreinoD(false);
        setColorTreinoE(false);
        setColorTreinoF(false);
        break;
      case 'D':
        setColorTreinoA(false);
        setColorTreinoB(false);
        setColorTreinoC(false);
        setColorTreinoD(true);
        setColorTreinoE(false);
        setColorTreinoF(false);
        break;
      case 'E':
        setColorTreinoA(false);
        setColorTreinoB(false);
        setColorTreinoC(false);
        setColorTreinoD(false);
        setColorTreinoE(true);
        setColorTreinoF(false);
        break;
      default:
        setColorTreinoA(false);
        setColorTreinoB(false);
        setColorTreinoC(false);
        setColorTreinoD(false);
        setColorTreinoE(false);
        setColorTreinoF(true);
        break;
    }
    setTreinoExercicio({
      ...treinoExercicio,
      idExercicio: ""+exercicio.id,
      treino: treino,
    });
  };

  return (
    <ModalSimple
      showModal={showModal}
      onCloseModal={() => onCloseModal(false)}
      title={'Adicione o exercício'}
      labelButton="Adicionar ao treino"
      actionButton={() => handleAddExercicioByTreino()}
    >
      <FormControl mt="5">
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '70%' }}>
            <FormControl.Label style={{ marginTop: 10 }}>Nome:</FormControl.Label>
            <Text style={stylesGlobal.textTitle}>{exercicio.nome}</Text>
          </View>
          <View style={{ width: '30%' }}>
            <FormControl.Label style={{ marginTop: 10 }}>Grupo Muscular:</FormControl.Label>
            <Text style={stylesGlobal.textTitle}>{exercicio.grupo}</Text>
          </View>
        </View>
        <FormControl.Label style={{ marginTop: 10 }}>Informações:</FormControl.Label>
        <Text style={stylesGlobal.textTitle}>{exercicio.info}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '20%', marginRight: 20 }}>
            <FormControl.Label>
              Series <Text style={{ color: 'red' }}>*</Text>
            </FormControl.Label>
            <InputSimple
              placeholder="0"
              value={treinoExercicio.series}
              keyboardType="numeric"
              onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, series: parseInt(e) })}
            />
          </View>
          <View style={{ width: '30%', marginRight: 20 }}>
            <FormControl.Label>
              Repetições <Text style={{ color: 'red' }}>*</Text>
            </FormControl.Label>
            <InputSimple
              placeholder="drop 0-0"
              value={treinoExercicio.repeticoes}
              onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, repeticoes: e })}
            />
          </View>
          <View style={{ marginRight: 20 }}>
            <FormControl.Label>
              Descanso <Text style={{ color: 'red' }}>*</Text>
            </FormControl.Label>
            <SelectSimple
              w="150"
              defaultValue={'5'}
              keyboardType="numeric"
              dataSource={temposDescansos}
              onChange={(e) => setTreinoExercicio({ ...treinoExercicio, descanso: e })}
              value={treinoExercicio.descanso}
            />
          </View>
        </View>
        <Text style={{ marginTop: 30 }}>Treinos disponiveis:</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '20%', marginTop: 20 }}>
          {stateUser.diasTreinos.includes('A') && (
            <>
              <ButtonTreino
                color={colorTreinoA ? colorSecondary : colorSubtitle}
                onPress={() => onAtivedTreino('A')}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>A</Text>
              </ButtonTreino>
              <Text style={{ marginTop: 15, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
                {' '}
                |{' '}
              </Text>
            </>
          )}
          {stateUser.diasTreinos.includes('B') && (
            <>
              <ButtonTreino
                color={colorTreinoB ? colorSecondary : colorSubtitle}
                onPress={() => onAtivedTreino('B')}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>B</Text>
              </ButtonTreino>
              <Text style={{ marginTop: 15, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
                {' '}
                |{' '}
              </Text>
            </>
          )}
          {stateUser.diasTreinos.includes('C') && (
            <>
              <ButtonTreino
                color={colorTreinoC ? colorSecondary : colorSubtitle}
                onPress={() => onAtivedTreino('C')}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>C</Text>
              </ButtonTreino>
            </>
          )}
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '20%', marginTop: 20 }}>
          {stateUser.diasTreinos.includes('C') && (
            <>
              <ButtonTreino
                color={colorTreinoD ? colorSecondary : colorSubtitle}
                onPress={() => onAtivedTreino('D')}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>D</Text>
              </ButtonTreino>
              <Text style={{ marginTop: 15, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
                {' '}
                |{' '}
              </Text>
            </>
          )}
          {stateUser.diasTreinos.includes('E') && (
            <>
              <ButtonTreino
                color={colorTreinoE ? colorSecondary : colorSubtitle}
                onPress={() => onAtivedTreino('E')}
              >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>E</Text>
              </ButtonTreino>
              <Text style={{ marginTop: 15, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
                {' '}
                |{' '}
              </Text>
            </>
          )}
          {stateUser.diasTreinos.includes('F') && (
            <ButtonTreino
              color={colorTreinoF ? colorSecondary : colorSubtitle}
              onPress={() => onAtivedTreino('F')}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>F</Text>
            </ButtonTreino>
          )}
        </View>
      </FormControl>
    </ModalSimple>
  );
}

export default ModalAddTreino;
