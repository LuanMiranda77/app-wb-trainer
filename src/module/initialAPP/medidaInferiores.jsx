import { Center, Flex, FormControl, ScrollView, Text, View } from 'native-base';
import React from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import Loanding from '../../components/modal/loanding';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';

// import { Container } from './styles';

export function MedidasViewInferior({ ...props }) {
  const { stateUser, dispatch } = useUserContext();
  const { saveNew, show, setShow, } = useUserAplication();

  return (
    <>
      <Loanding showLoading={show} closeLoading={() => setShow(false)} text='Aguarde, montando seu treino...' />
      <View p="5" style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <View mt="5" mb="10">
          <Text fontSize="2xl"> 🥳 Chegamos! etapa final</Text>
          <Center mt="2">
            <Text fontSize="4xl">Digite suas medidas corporais inferiores</Text>
          </Center>
        </View>
        <FormControl>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ marginBottom: 0, maxHeight: '100%' }}
          >
            <Flex flexDirection="row">
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>Quadril</FormControl.Label>
                <InputSimple
                  placeholder="Medida quadril"
                  value={String(stateUser.quadril)}
                  onChangeText={(e) =>
                    dispatch({ type: 'update', payload: { ...stateUser, quadril: parseFloat(e) } })
                  }
                  keyboardType="numeric"
                />
              </View>
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>% de Gordura corporal</FormControl.Label>
                <InputSimple
                  placeholder="Medida do antebraço esquerdo"
                  value={String(stateUser.gorduraCorporal)}
                  onChangeText={(e) =>
                    dispatch({
                      type: 'update',
                      payload: { ...stateUser, gorduraCorporal: parseFloat(e) },
                    })
                  }
                  keyboardType="numeric"
                />
              </View>
            </Flex>
            <Flex flexDirection="row">
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>Coxa direito</FormControl.Label>
                <InputSimple
                  placeholder="Medida coxa direito"
                  value={String(stateUser.pernaDireita)}
                  onChangeText={(e) =>
                    dispatch({
                      type: 'update',
                      payload: { ...stateUser, pernaDireita: parseFloat(e) },
                    })
                  }
                  keyboardType="numeric"
                />
              </View>
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>Coxa esquerdo</FormControl.Label>
                <InputSimple
                  placeholder="Medida coxa esquerdo"
                  value={String(stateUser.pernaEsquerda)}
                  onChangeText={(e) =>
                    dispatch({
                      type: 'update',
                      payload: { ...stateUser, pernaEsquerda: parseFloat(e) },
                    })
                  }
                  keyboardType="numeric"
                />
              </View>
            </Flex>
            <Flex flexDirection="row">
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>Panturilha direita</FormControl.Label>
                <InputSimple
                  placeholder="Medida do antebraço esquerdo"
                  value={String(stateUser.panturilhaDireita)}
                  onChangeText={(e) =>
                    dispatch({
                      type: 'update',
                      payload: { ...stateUser, panturilhaDireita: parseFloat(e) },
                    })
                  }
                  keyboardType="numeric"
                />
              </View>
              <View style={{ width: '50%', marginRight: 20 }}>
                <FormControl.Label>Panturilha esquerda</FormControl.Label>
                <InputSimple
                  placeholder="Medida do antebraço direito"
                  value={String(stateUser.panturilhaEsquerda)}
                  onChangeText={(e) =>
                    dispatch({
                      type: 'update',
                      payload: { ...stateUser, panturilhaEsquerda: parseFloat(e) },
                    })
                  }
                  keyboardType="numeric"
                />
              </View>
            </Flex>
          </ScrollView>
        </FormControl>

        <View style={{ position: 'absolute', top: 600, left: '45%' }}>
          <ButtonIcon
            icon="right"
            color="white"
            backgroundColor={colorPrimary}
            width={80}
            height={80}
            padding={20}
            borderRadius={80}
            size={40}
            onPress={() => {
              saveNew();
            }}
          />
        </View>
      </View>
    </>
  );
}
