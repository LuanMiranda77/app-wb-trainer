import { Flex, FormControl, Text, View } from 'native-base';
import React from 'react';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { Inferiores, Superiores } from './styles';

function ModalMedidas({ showModal, onCloseModal }) {
  const { stateUser, dispatch } = useUserContext();
  const { toastError, toastSucess } = Toast();

  const onSave = async () => {
    try {
      const realm = await getRaelm();
      let object = realm.objectForPrimaryKey(enumSchemas.USER_APLICATION, stateUser._id);
      realm.write(() => {
        object.altura = stateUser.altura;
        object.peso = stateUser.peso;
        object.bracoDireito = stateUser.bracoDireito;
        object.bracoEsquerdo = stateUser.bracoEsquerdo;
        object.antebracoDireito = stateUser.antebracoDireito;
        object.antebracoEsquerdo = stateUser.antebracoEsquerdo;
        object.pernaDireita = stateUser.pernaDireita;
        object.pernaEsquerda = stateUser.pernaEsquerda;
        object.panturilhaDireita = stateUser.panturilhaDireita;
        object.panturilhaEsquerda = stateUser.panturilhaEsquerda;
        object.cintura = stateUser.cintura;
        object.quadril = stateUser.quadril;
        object.peito = stateUser.peito;
        object.gorduraCorporal = stateUser.gorduraCorporal;
      });
      onCloseModal(false);
      toastSucess('Gravado com sucesso');
    } catch (error) {
      onCloseModal(false);
      console.error(error);
      toastError(error);
    }
  };

  return (
    <ModalSimple
      title="Editar Medidas"
      showModal={showModal}
      onCloseModal={onCloseModal}
      icon="checkcircleo"
      labelButton={'Salvar'}
      actionButton={onSave}
    >
      <View>
        <FormControl>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do braço direito"
                value={String(stateUser.altura.toFixed(3))}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, altura: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label="Altura"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do braço esquerdo"
                value={String(stateUser.peso.toFixed(3))}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, peso: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label="Peso"
              />
            </View>
          </Flex>
        </FormControl>
      </View>
      <Superiores>
        <View mt="0" mb="5">
          <Text fontSize="2xl">Medidas corporais superiores</Text>
        </View>
        <FormControl>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do braço direito"
                value={String(stateUser.bracoDireito)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, bracoDireito: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label=" Braço direito"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do braço esquerdo"
                value={String(stateUser.bracoEsquerdo)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, bracoEsquerdo: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label="Braço esquerdo"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={String(stateUser.antebracoDireito)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, antebracoDireito: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label="Antebraço direito"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.antebracoEsquerdo)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, antebracoEsquerdo: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
                label="Antebraço esquerdo"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.peito)}
                onChangeText={(e) =>
                  dispatch({ type: 'update', payload: { ...stateUser, peito: parseFloat(e) } })
                }
                keyboardType="numeric"
                label="Peitoral"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={String(stateUser.cintura)}
                onChangeText={(e) =>
                  dispatch({ type: 'update', payload: { ...stateUser, cintura: parseFloat(e) } })
                }
                keyboardType="numeric"
                label="Cintura"
              />
            </View>
          </Flex>
        </FormControl>
      </Superiores>

      <Inferiores>
        <View mt="0" mb="5">
          <Text fontSize="2xl">Medidas corporais inferiores</Text>
        </View>
        <FormControl>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>Quadril</FormControl.Label>
              <InputSimple
                placeholder="Medida quadril"
                value={String(stateUser.quadril)}
                onChangeText={(e) =>
                  dispatch({ type: 'update', payload: { ...stateUser, quadril: parseFloat(e) } })
                }
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>% de Gordura corporal</FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.gorduraCorporal)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, gorduraCorporal: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>Coxa direito</FormControl.Label>
              <InputSimple
                placeholder="Medida coxa direito"
                value={String(stateUser.pernaDireita)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, pernaDireita: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>Coxa esquerdo</FormControl.Label>
              <InputSimple
                placeholder="Medida coxa esquerdo"
                value={String(stateUser.pernaEsquerda)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, pernaEsquerda: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
              />
            </View>
          </Flex>
          <Flex flexDirection="row">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>Panturilha direita</FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={String(stateUser.panturilhaDireita)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, panturilhaDireita: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>Panturilha esquerda</FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={String(stateUser.panturilhaEsquerda)}
                onChangeText={(e) =>
                  dispatch({
                    type: 'update',
                    payload: { ...stateUser, panturilhaEsquerda: parseFloat(e) },
                  })
                }
                keyboardType="numeric"
              />
            </View>
          </Flex>
        </FormControl>
      </Inferiores>
    </ModalSimple>
  );
}

export default ModalMedidas;
