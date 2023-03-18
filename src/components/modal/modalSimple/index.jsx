import { Button, Modal } from 'native-base';
import React from 'react';

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
      >
        <Modal.Content {...styles['top']}>
          <Modal.CloseButton />
          <Modal.Header>{props.title}</Modal.Header>
          <Modal.Body>{props.children}</Modal.Body>
          <Modal.Footer>
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
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 20,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
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
