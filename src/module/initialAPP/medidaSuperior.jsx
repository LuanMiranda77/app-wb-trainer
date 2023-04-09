import { Center, Flex, FormControl, Image, ScrollView, Text, View } from 'native-base';
import React, { useState } from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';

// import { Container } from './styles';

export function MedidasViewSuperior({ ...props }) {
  const { stateUser, dispatch } = useUserContext();
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
              <InputSimple
                placeholder="Medida do braço direito"
                value={String(stateUser.bracoDireito)}
                onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, bracoDireito: parseFloat(e) }})}
                keyboardType="numeric"
                label=' Braço direito'
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do braço esquerdo"
                value={String(stateUser.bracoEsquerdo)}
                onChangeText={(e) =>  dispatch({ type: 'update', payload: { ...stateUser, bracoEsquerdo: parseFloat(e) } })}
                keyboardType="numeric"
                label='Braço esquerdo'
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={String(stateUser.antebracoDireito)}
                onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, antebracoDireito: parseFloat(e) }})}
                keyboardType="numeric"
                label='Antebraço direito'
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.antebracoEsquerdo)}
                onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, antebracoEsquerdo: parseFloat(e) }})}
                keyboardType="numeric"
                label='Antebraço esquerdo'
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.peito)}
                onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, peito: parseFloat(e) }})}
                keyboardType="numeric"
                label='Peitoral'
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={String(stateUser.cintura)}
                onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, cintura: parseFloat(e) }})}
                keyboardType="numeric"
                label='Cintura'
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
          }}
        />
      </View>
    </View>
  );
}
