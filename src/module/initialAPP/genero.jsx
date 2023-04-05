import { Center, Flex, Text, View } from 'native-base';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorIconFooter, colorPrimary, colorSecondary } from '../../styles';
import { ButtonSex } from './styles';

// import { Container } from './styles';

export function GeneroView({ ...props }) {
  // const { user, setUser } = useUserAplication();
  const { stateUser, dispatch } = useUserContext();
  const [isSexo, setIsSexo] = useState(true);
  console.log(props.route.params);
  return (
    <View p="5" style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View mt="5" mb="100">
        <Text fontSize="3xl">👋 Olá! {stateUser.nome}{stateUser.genero} </Text>
        <Center mt='10'>
          <Text fontSize="4xl">Escolha seu gênero</Text>
        </Center>
      </View>
      <Flex flexDirection={'row'}>
        <ButtonSex
          color={isSexo ? colorSecondary : colorIconFooter}
          onPress={() => {
            setIsSexo(true);
            dispatch({ type: 'update', payload: { ...stateUser, genero: 'M' } });
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: isSexo ? colorSecondary : colorIconFooter,
            }}
          >
            <Icon name="male" color="white" size={30} />
          </Flex>
          <Text fontSize="xl" bold>
            Masculino
          </Text>
          <Text fontSize="xs">Seu plano de treino será montado pensando em um corpo masculino</Text>
        </ButtonSex>
        <ButtonSex
          color={!isSexo ? colorSecondary : colorIconFooter}
          onPress={() => {
            setIsSexo(false);
            dispatch({ type: 'update', payload: { ...stateUser, genero: 'F' } });
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: !isSexo ? colorSecondary : colorIconFooter,
            }}
          >
            <Icon name="female" color="white" size={30} />
          </Flex>
          <Text fontSize="xl" bold>
            Feminino
          </Text>
          <Text fontSize="xs">Seu plano de treino será montado pensando em um corpo feminico</Text>
        </ButtonSex>
      </Flex>
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
            props.navigation.navigate('Medidas Superiores', {image:'/src/assets/exercise/supino-inclinado-com-barra.gif'});
            // dispatch({type:'update', payload:props.route.params.data.user});
          }}
        />
      </View>
    </View>
  );
}
