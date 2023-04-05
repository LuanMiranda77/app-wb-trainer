import { Center, Flex, FormControl, ScrollView, Text, View } from 'native-base';
import React from 'react';
import RNRestart from 'react-native-restart';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';

// import { Container } from './styles';

export function MedidasViewInferior({ ...props }) {
  const { stateUser, dispatch } = useUserContext();
  const {saveNew} = useUserAplication();

  return (
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
                value={String(user.quadril)}
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
                value={String(user.gorduraCorporal)}
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
                value={String(user.pernaDireita)}
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
                value={String(user.pernaEsquerda)}
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
                value={String(user.panturilhaDireita)}
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
                value={String(user.panturilhaEsquerda)}
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
            setTimeout(
              function () {
                RNRestart.Restart();
              }.bind(this),
              500
            );
          }}
        />
      </View>
    </View>
  );
}
