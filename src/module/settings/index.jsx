import { Divider, Flex, Switch, Text, View } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { HeaderNavBar } from '../../layout/headerNavBar';
import { backgroundColor, colorIconFooter, colorSecondary, stylesGlobal } from '../../styles';
import ModalMedidas from './modalMedidas';
import { ModalPerfil } from './modalPerfil';
import ModalPrivacidade from './modalprivacidade';

export function Settings({ ...props }) {
  const [showModalPerfil, setShowModalPerfil] = useState(false);
  const [showModalMedidas, setShowModalMedidas] = useState(false);
  const [showModalPrivacidade, setShowModalPrivacidade] = useState(false);

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <HeaderNavBar route={props.route} />
        <View p="5">
          <Text mb="5" fontWeight="bold" color={colorIconFooter} fontSize={14}>
            Geral
          </Text>
          <Flex mb="2" direction="row" justifyContent="space-between" alignItems="center">
            <Text style={stylesGlobal.textTitle}>Notificações</Text>
            <Switch defaultIsChecked onTrackColor={colorSecondary} size="lg" />
          </Flex>
          <Divider />
          <Flex mt="4" mb="2" direction="row" justifyContent="space-between" alignItems="center">
            <Text style={stylesGlobal.textTitle}>Som</Text>
            <Switch defaultIsChecked onTrackColor={colorSecondary} size="lg" />
          </Flex>
          <Divider />
          <Text mt="10" mb="2" fontWeight="bold" color={colorIconFooter} fontSize={14}>
            Conta
          </Text>
          <TouchableOpacity onPress={() => setShowModalPerfil(true)}>
            <Flex mt="4" mb="2" direction="row" justifyContent="space-between" alignItems="center">
              <Text style={stylesGlobal.textTitle}>Dados do perfil</Text>
              <ButtonIcon
                icon="right"
                size={20}
                color="white"
                onPress={() => setShowModalPerfil(true)}
              />
            </Flex>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => setShowModalMedidas(true)}>
            <Flex mt="4" mb="2" direction="row" justifyContent="space-between" alignItems="center">
              <Text style={stylesGlobal.textTitle}>Medidcas corporais</Text>
              <ButtonIcon
                icon="right"
                size={20}
                color="white"
                onPress={() => setShowModalMedidas(true)}
              />
            </Flex>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => setShowModalPrivacidade(true)}>
            <Flex mt="4" mb="2" direction="row" justifyContent="space-between" alignItems="center">
              <Text style={stylesGlobal.textTitle}>{'Termo & privacidade'}</Text>
              <ButtonIcon
                icon="right"
                size={20}
                color="white"
                onPress={() => setShowModalPrivacidade(true)}
              />
            </Flex>
          </TouchableOpacity>
          <Divider />
        </View>
      </View>
      <ModalPerfil showModal={showModalPerfil} onCloseModal={() => setShowModalPerfil(false)} />
      <ModalMedidas showModal={showModalMedidas} onCloseModal={() => setShowModalMedidas(false)} />
      <ModalPrivacidade
        showModal={showModalPrivacidade}
        onCloseModal={() => setShowModalPrivacidade(false)}
      />
    </>
  );
}
