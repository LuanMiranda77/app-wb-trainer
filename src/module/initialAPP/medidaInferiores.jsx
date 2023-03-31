import { Center, Flex, FormControl, ScrollView, Text, View } from 'native-base';
import React, { useState } from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';
import RNRestart from 'react-native-restart';

// import { Container } from './styles';

export function MedidasViewInferior({ ...props }) {
  const { user, setUser, saveNew } = useUserAplication();
  const { stateUser, dispatch } = useUserContext();
  const [isSexo, setIsSexo] = useState(true);
  return (
    <View p="5" style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View mt="5" mb="10">
        <Text fontSize="2xl"> 🥳 Chegamos! etapa final</Text>
        <Center mt="2">
          <Text fontSize="4xl">Digite suas medidas corporais inferiores</Text>
        </Center>
      </View>
      <FormControl>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0, maxHeight:'100%' }}>
        <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Quadril <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida quadril"
                value={user.quadril}
                onChangeText={(e) => setUser({ ...user, quadril: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
             % de Gordura corporal <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={user.gorduraCorporal}
                onChangeText={(e) => setUser({ ...user, gorduraCorporal: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Coxa direito <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida coxa direito"
                value={user.pernaDireita}
                onChangeText={(e) => setUser({ ...user, pernaDireita: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Coxa esquerdo <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida coxa esquerdo"
                value={user.pernaEsquerda}
                onChangeText={(e) => setUser({ ...user, pernaEsquerda: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
              Panturilha direita <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={user.panturilhaDireita}
                onChangeText={(e) => setUser({ ...user, panturilhaDireita: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
              Panturilha esquerda <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={user.panturilhaEsquerda}
                onChangeText={(e) => setUser({ ...user, panturilhaEsquerda: parseFloat(e) })}
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
              function() {
                RNRestart.Restart();
              }
              .bind(this),
              500
            );
            
          }}
        />
      </View>
    </View>
  );
}
