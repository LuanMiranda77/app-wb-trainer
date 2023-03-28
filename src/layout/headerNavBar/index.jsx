import React from 'react';
import { Text, View } from 'react-native';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { useUserContext } from '../../context/useUserContext';
import {
  backgroundColor,
  colorIconFooter,
  colorSecondary,
  colorWhite,
  TituloScreen,
} from '../../styles';
import { NavBar, PerfilUser } from './styles';

export function HeaderNavBar({ ...props }) {
  const { stateUser } = useUserContext();

  return (
    <NavBar color={backgroundColor}>
      {props.route?.name == 'Homes' ? (
        <>
          <View>
            <Text style={{ fontSize: 15, color: colorIconFooter }}>Ola! Vamos treinar 👋</Text>
            <Text style={{ fontSize: 25, color: colorWhite }}>{stateUser.nome}</Text>
          </View>
          <PerfilUser source={require('../../assets/menina.jpeg')} />
        </>
      ) : props.route?.name == 'Exercicios' ? (
        <>
          {/* <ContainerImage source={imge} /> */}

          <TituloScreen>Grupo Muscular</TituloScreen>
          <ButtonIcon
            icon="plus"
            color={colorSecondary}
            size={30}
            onPress={() => props.buttonRigth()}
          />
        </>
      ) : props.route?.name == 'Treino' ? (
        <>
          {/* <ContainerImage source={imge} /> */}

          <TituloScreen>{props.route?.name}</TituloScreen>
          <ButtonIcon
            icon="plus"
            color={colorSecondary}
            size={30}
            onPress={() => props.buttonRigth()}
          />
        </>
      ) : props.route?.name == 'Evolução' ? (
        <>
          {/* <ContainerImage source={imge} /> */}

          <TituloScreen>{props.route?.name}</TituloScreen>
          <ButtonIcon
            icon="plus"
            color={colorSecondary}
            size={30}
            onPress={() => props.buttonRigth()}
          />
        </>
      ) : props.route?.name == 'Config' ? (
        <>
          {/* <ContainerImage source={imge} /> */}

          <TituloScreen>{props.route?.name}</TituloScreen>
          <ButtonIcon
            icon="plus"
            color={colorSecondary}
            size={30}
            onPress={() => props.buttonRigth()}
          />
        </>
      ) : props.route?.name == 'Lista Exercicio' ? (
        <>
          {/* <ContainerImage source={imge} /> */}
          <ButtonIcon
            icon="arrowleft"
            size={30}
            color="white"
            onPress={() => props.navigation.goBack()}
          />
          <TituloScreen>{props.route?.name}</TituloScreen>
          <ButtonIcon
            icon="plus"
            color={colorSecondary}
            size={30}
            onPress={() => props.buttonRigth()}
          />
        </>
      ) : (
        props.route?.name == 'Detalhes do treino' && (
          <>
            {/* <ContainerImage source={imge} /> */}
            <ButtonIcon
              icon="arrowleft"
              size={30}
              color="white"
              onPress={() => props.navigation.goBack()}
            />
            <TituloScreen>{props.route?.name}</TituloScreen>
          </>
        )
      )}
    </NavBar>
  );
}
