import { Center, Image, Modal, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { colorFooter, colorWhite } from '../../../styles';

export default function Loanding({ showLoading, closeLoading, text = 'Carregando...' }) {
  return (
    <>
      <Modal isOpen={showLoading} onClose={closeLoading} size="full" style={{ flex: 1 }}>
        <View {...styles['bottom']}>
          <Modal.Body>
            <Center mt="60%">
              <Image
                source={require('../../../assets/loading.gif')}
                alt="loading"
                width={'50%'}
                height={150}
              />
              {text == 'Carregando...' ? (
                <Text style={{ fontSize: 40, color: colorWhite, fontWeight: 'bold' }}>{text}</Text>
              ) : (
                <Text style={{ fontSize: 30, color: colorWhite, fontWeight: 'bold' }}>{text}</Text>
              )}
            </Center>
          </Modal.Body>
        </View>
      </Modal>
    </>
  );
}

const styles = {
  bottom: {
    marginBottom: -2,
    marginTop: '10%',
    background: colorFooter,
    width: '100%',
    height: '95%',
    opacity: .8
  },
};
