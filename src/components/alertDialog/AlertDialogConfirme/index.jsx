import { Flex, Modal, ScrollView, Text, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorPrimary, colorWhite, stylesGlobal } from '../../../styles';
import { ButtonSet } from './styles';

export function AlertDialogConfirme({
  showModal,
  onCloseModal,
  title,
  children,
  actionButton,
  colorHeader,
}) {
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
          <ScrollView h="100%">{children}</ScrollView>
        </Modal.Body>
        <Flex direction="row" style={{ padding: 20 }}>
          <ButtonSet onPress={onCloseModal}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Não</Text>
          </ButtonSet>
          <ButtonSet onPress={actionButton}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Sim</Text>
          </ButtonSet>
        </Flex>
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
