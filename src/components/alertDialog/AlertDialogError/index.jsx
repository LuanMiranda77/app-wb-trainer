import { Center, Modal, Text, View } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorPrimary, colorWhite, stylesGlobal } from '../../../styles';
import { ButtonSet } from './styles';

export function AlertDialogError({
  title,
  showModal,
  onCloseModal,
  message,
  colorHeader,
  time = 0,
}) {
  // useEffect(() => {
  //   time > 0 &&
  //     setTimeout(() => {
  //       onCloseModal(false);
  //     }, time);
  // }, []);

  return (
    <Modal isOpen={showModal} onClose={onCloseModal} size="full" style={{ flex: 1 }}>
      <View {...styles['bottom']}>
        <Modal.Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colorHeader ? colorHeader : colorPrimary,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <Text style={stylesGlobal.textTitle}>{title}</Text>
          <ButtonSet onPress={onCloseModal}>
            <Icon name="close" size={22} color={colorWhite} />
          </ButtonSet>
        </Modal.Header>
        <Modal.Body>
          <Text>{message}</Text>
        </Modal.Body>
        <View style={{ padding: 20 }}>
          <Center mr='28%'>
            <ButtonSet onPress={onCloseModal}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Ok</Text>
            </ButtonSet>
          </Center>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  bottom: {
    marginBottom: 0,
    marginTop: '18%',
    background: colorFooter,
    width: '80%',
    // height: '50%',
    borderRadius: 15,
  },
};
