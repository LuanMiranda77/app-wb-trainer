import { Modal, ScrollView, View } from 'native-base';
import React from 'react';
import { backgroundColor, colorFooter } from '../../../styles';
import ButtonSimple from '../../Buttons/ButtonSimple';

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
      >
        <Modal.Content {...styles['bottom']}>
          <Modal.CloseButton />
          {/* <Modal.Header>{props.title}</Modal.Header> */}

          <Modal.Body>
            <ScrollView h="100%">{props.children}</ScrollView>
          </Modal.Body>
          <View style={{ padding: 20 }}>
            {/* <Button style={{borderRadius:50}} onPress={() => props.actionButton()}>{props.labelButton}</Button> */}
            <ButtonSimple label={props.labelButton} />
          </View>
          {/* <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  props.onCloseModal(false);
                }}
              >
                Cancelar
              </Button>
              <Button onPress={() => props.actionButton()}>{props.labelButton}</Button>
            </Button.Group>
          </Modal.Footer> */}
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: '60px',
    // width: '100%',
    // height: '100%',
    flex: 1,
    background: colorFooter,
    // borderRadius: '30px',
    borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
  },
  bottom: {
    marginBottom: 0,
    flex: 1,
    marginTop: 'auto',
    background: colorFooter,
    // borderRadius: '30px',
    borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
};
