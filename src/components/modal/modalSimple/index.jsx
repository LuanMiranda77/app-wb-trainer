import { Button, Flex, Modal, Text, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorPrimary, colorWhite, stylesGlobal } from '../../../styles';
import { ButtonSet } from './styles';

export default function ModalSimple(props) {
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  const styles = {
    bottom: {
      marginBottom: -2,
      marginTop: props.mt ? props.mt : '18%',
      background: colorFooter,
      width: '100%',
      height: '90%',
    },
  };

  return (
    <>
      <Modal isOpen={props.showModal} onClose={props.onCloseModal} size="full" style={{ flex: 1 }}>
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
            <Text style={stylesGlobal.textTitle}>{props.title}</Text>
            <ButtonSet onPress={props.onCloseModal}>
              <Icon name="close" size={22} color={colorWhite} />
            </ButtonSet>
          </Modal.Header>
          {props.labelButton ? (
            <Modal.Body>{props.children}</Modal.Body>
          ) : (
            <View h="100%">{props.children}</View>
          )}
          {props.labelButton && (
            <View style={{ padding: 20 }}>
              <Button style={{ borderRadius: 50 }} onPress={() => props.actionButton()}>
                <Flex direction='row'>
                  {props.icon && <Icon name={props.icon} size={20} color={colorWhite} style={{marginRight:10}}/>}
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                    {props.labelButton}
                  </Text>
                </Flex>
              </Button>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}
