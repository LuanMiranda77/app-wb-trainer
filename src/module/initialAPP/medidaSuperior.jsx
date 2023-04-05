import { Center, Flex, FormControl, Image, ScrollView, Text, View } from 'native-base';
import React, { useState } from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';

// import { Container } from './styles';

export function MedidasViewSuperior({ ...props }) {
  const { user, setUser } = useUserAplication();
  const { stateUser, dispatch } = useUserContext();
  const [isSexo, setIsSexo] = useState(true);
  return (
    <View p="5" style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View mt="5" mb="10">
        <Text fontSize="2xl">😌 Calma! Você está quase lá</Text>
        <Center mt="2">
          <Text fontSize="4xl">Digite suas medidas corporais superiores</Text>
        </Center>
      </View>
      <FormControl>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0, maxHeight:'100%' }}>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Braço direito <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do braço direito"
                value={user.bracoDireito}
                onChangeText={(e) => setUser({ ...user, bracoDireito: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Braço esquerdo <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do braço esquerdo"
                value={user.bracoEsquerdo}
                onChangeText={(e) => setUser({ ...user, bracoEsquerdo: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Antebraço direito <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={user.antebracoDireito}
                onChangeText={(e) => setUser({ ...user, antebracoDireito: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
              Antebraço esquerdo <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={user.antebracoEsquerdo}
                onChangeText={(e) => setUser({ ...user, antebracoEsquerdo: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
              Peitoral <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={user.peito}
                onChangeText={(e) => setUser({ ...user, peito: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Cintura <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={user.antebracoDireito}
                onChangeText={(e) => setUser({ ...user, cintura: parseFloat(e) })}
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
            props.navigation.navigate('Medidas Inferiores');
            // dispatch({type:'new', payload:user});
          }}
        />
      </View>
    </View>
  );
}
