import { Flex, FormControl, Image } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import { useUserContext } from '../../context/useUserContext';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import { colorSecondary, colorSubtitle, stylesGlobal } from '../../styles';
import { emunImage } from '../../utils/enums';
import { temposDescansos } from '../exercise/arrayDescaso';
import { ButtonTreino, ImageTreino } from './styles';

// import { Container } from './styles';

function ModalExercicio({...props}) {
  const [colorTreinoA, setColorTreinoA] = useState(false);
  const [colorTreinoB, setColorTreinoB] = useState(false);
  const [colorTreinoC, setColorTreinoC] = useState(false);
  const [colorTreinoD, setColorTreinoD] = useState(false);
  const [colorTreinoE, setColorTreinoE] = useState(false);
  const [colorTreinoF, setColorTreinoF] = useState(false);

  const { treinoExercicio, setTreinoExercicio, handleAddExercicioByTreino } = useExercicioPage(
    props.exercicio,
    props.showModal,
    props.onCloseModal
  );
  const { stateUser } = useUserContext();

  useEffect(()=>{
    props?.treinoExercicio && setTreinoExercicio(props.treinoExercicio);
    props?.treinoExercicio?.treino=="A" && setColorTreinoA(true);
    props?.treinoExercicio?.treino=="B" && setColorTreinoB(true);
    props?.treinoExercicio?.treino=="C" && setColorTreinoC(true);
    props?.treinoExercicio?.treino=="D" && setColorTreinoD(true);
    props?.treinoExercicio?.treino=="E" && setColorTreinoE(true);
    props?.treinoExercicio?.treino=="F" && setColorTreinoF(true);
  },[props?.treinoExercicio]);

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
      exercicio: props.exercicio.nome,
      _idExercicio: '' + props.exercicio._id,
      treino: treino,
    });
  };

  const img = '../../assets/h-1.jpg';

  return (
    <ModalSimple
      showModal={props.showModal}
      onCloseModal={() => props.onCloseModal(false)}
      title={props.treinoExercicio ? 'Editar o exercício':'Adicione o exercício'}
      labelButton={props.treinoExercicio ? 'Salvar edição':'Adicione ao treino'}
      actionButton={() => handleAddExercicioByTreino()}
    >
      <FormControl mt="5">
        <View w='full'>
          <Image
            ml='25%'
            h="200"
            w="200"
            alt="image"
            source={props.exercicio?.image == '' ? require(img) : emunImage[props.exercicio?.image]}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '70%' }}>
            <FormControl.Label style={{ marginTop: 10 }}>Nome:</FormControl.Label>
            <Text style={stylesGlobal.textTitle}>{props.exercicio?.nome}</Text>
          </View>
          <View style={{ width: '30%' }}>
            <FormControl.Label style={{ marginTop: 10 }}>Grupo Muscular:</FormControl.Label>
            <Text style={stylesGlobal.textTitle}>{props.exercicio?.grupo}</Text>
          </View>
        </View>
        <FormControl.Label style={{ marginTop: 10 }}>Informações:</FormControl.Label>
        <Text style={stylesGlobal.textTitle}>{props.exercicio?.info}</Text>
        <Flex direction="row" style={{ marginTop: 10 }}>
          <View style={{ width: '30%', marginRight: 20 }}>
            <InputSimple
              label="Series"
              placeholder="0"
              value={!isNaN(treinoExercicio.series) ? String(treinoExercicio.series) : '0'}
              keyboardType="numeric"
              onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, series: parseInt(e) })}
              required
            />
          </View>
          <View style={{ width: '65%', marginRight: 20 }}>
            <InputSimple
              label="Repetições:"
              placeholder="0-0"
              value={treinoExercicio.repeticoes}
              onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, repeticoes: e })}
              required
            />
          </View>
        </Flex>

        <Flex direction="row">
          <View style={{ width: '30%', marginRight: 20 }}>
            <InputSimple
              label="Carga kg:"
              placeholder="0"
              value={isNaN(treinoExercicio.carga) ? '0' : String(treinoExercicio.carga)}
              keyboardType="numeric"
              onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, carga: parseFloat(e) })}
              required
            />
          </View>
          <View style={{ marginRight: 20 }}>
            <SelectSimple
              label='Descanso'
              w="245"
              keyboardType="numeric"
              dataSource={temposDescansos}
              onChange={(e) => setTreinoExercicio({ ...treinoExercicio, descanso: e })}
              value={treinoExercicio.descanso}
              required
            />
          </View>
        </Flex>
        <View style={{ width: '100%', marginRight: 20 }}>
          <InputSimple
            label="Observação: (drops,super-set...)"
            placeholder="Digite a obs"
            value={treinoExercicio.obs}
            onChangeText={(e) => setTreinoExercicio({ ...treinoExercicio, obs: e })}
          />
        </View>
      </FormControl>
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
            <Text style={{ marginTop: 27, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
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
            <Text style={{ marginTop: 27, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
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
            <Text style={{ marginTop: 27, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
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
            <Text style={{ marginTop: 27, fontSize: 30, marginLeft: 10, marginRight: 10 }}>
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
    </ModalSimple>
  );
}

export default ModalExercicio;
