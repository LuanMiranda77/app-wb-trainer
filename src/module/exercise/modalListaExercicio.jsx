import { Center, Modal, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorPrimary, colorWhite, stylesGlobal } from '../../styles';
import { ListExercise } from './lista';

export function ModalListaExercicio({ showModal, onCloseModal, grupo, onActionNew }) {
  console.log(showModal, onCloseModal, grupo);
  return (
    <Modal isOpen={showModal} onClose={onCloseModal} size="full" style={{ flex: 1 }}>
      <View {...styles['bottom']}>
        <Modal.Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colorPrimary,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <TouchableOpacity onPress={onCloseModal}>
            <Icon name="back" size={25} color={colorWhite} />
          </TouchableOpacity>
          <Text style={stylesGlobal.textTitle}>Listar de exercício</Text>
          <TouchableOpacity onPress={onActionNew}>
            <Center>
              <Icon name="plus" size={22} color={colorWhite} />
              <Text>Criar novo</Text>
            </Center>
          </TouchableOpacity>
        </Modal.Header>
        <View style={{flex:1 }}><ListExercise grupo={grupo} /></View>
      </View>
    </Modal>
  );
}

const styles = {
  bottom: {
    marginBottom: -2,
    marginTop: '10%',
    background: colorFooter,
    width: '100%',
    height: '95%',
  },
};
