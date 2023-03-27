import { Button, Modal, ScrollView, Text, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorPrimary, colorWhite, stylesGlobal } from '../../../styles';
import { ButtonSet } from './styles';

export default function ModalSimple(props) {
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isOpen={props.showModal}
        onClose={props.onCloseModal}
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        size="full"
        // maxH="1000"
        style={{ flex: 1 }}
      >
        <View {...styles['bottom']}>
          {/* <Modal.CloseButton style={{color:colorWhite}}/> */}
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
          <Modal.Body>
            <ScrollView h="100%">{props.children}</ScrollView>
          </Modal.Body>
          <View style={{ padding: 20 }}>
            <Button style={{ borderRadius: 50 }} onPress={() => props.actionButton()}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                {props.labelButton}
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = {
  bottom: {
    marginBottom: 0,
    marginTop: '18%',
    background: colorFooter,
    width: '100%',
    height: '90%',
  },
};
