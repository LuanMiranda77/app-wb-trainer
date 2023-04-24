import { Center, Flex, FormControl, Radio, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { AlertDialogError } from '../../components/alertDialog/AlertDialogError';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { enumSchemas } from '../../database/enumSchemas';
import { getRaelm } from '../../database/realm';
import { colorError } from '../../styles';
import { Valid } from '../../utils/valid';
import experiencias from '../../__mooks/experiencia.json';
import { PhotoPrefil } from './styles';
// import moduleName from '../../assets/';

// import { Container } from './styles';

export function ModalPerfil({ showModal, onCloseModal }) {
  const { stateUser, dispatch } = useUserContext();
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [message, setMessage] = useState('');
  const [alertShow, setAlertShow] = useState(false);
  const [genero, setGenero] = useState('M');
  const { toastError } = Toast();

  const onSave = async () => {
    if (stateUser.nome == '' || dia == '' || mes == '' || ano == '') {
      setAlertShow(true);
      setMessage('Existe campos em branco');
      return;
    }

    if (!Valid.isValidNenorIdade(ano)) {
      setAlertShow(true);
      setMessage('Idade não permitida, minino 12 anos');
      return;
    }

    if (!Valid.isValidDateNasc(dia, mes, ano)) {
      setAlertShow(true);
      setMessage('Data de nascimento inválida');
      return;
    }
    try {
      const realm = await getRaelm();
      dispatch({ type: 'update', payload: { ...stateUser, genero: genero } });
      let object = realm.objectForPrimaryKey(enumSchemas.USER_APLICATION, stateUser._id);
      realm.write(() => {
        object.nome = stateUser.nome;
        object.dataNascimento = new Date(ano + '-' + mes + '-' + dia);
        object.experiencia = stateUser.experiencia;
        object.genero = genero;
      });
      onCloseModal(false);
    } catch (error) {
      onCloseModal(false);
      console.error(error);
      toastError(error);
    }
  };

  useEffect(() => {
    setDia('' + stateUser.dataNascimento.getDate());
    setMes('' + (stateUser.dataNascimento.getMonth() + 1));
    setAno('' + stateUser.dataNascimento.getFullYear());
    setGenero(stateUser.genero);
  }, []);

  return (
    <ModalSimple
      title="Editar perfil"
      showModal={showModal}
      onCloseModal={onCloseModal}
      labelButton={'Salvar'}
      icon="checkcircleo"
      actionButton={() => onSave()}
    >
      <View>
        <Center mt="4" mb="8">
          {genero == 'M' ? (
            <PhotoPrefil source={require('../../assets/perfil-m.png')} />
          ) : (
            <PhotoPrefil source={require('../../assets/perfil-f.png')} />
          )}
        </Center>
        <InputSimple
          label="Nome"
          placeholder="Digite seu nome"
          value={stateUser.nome}
          onChangeText={(e) => dispatch({ type: 'update', payload: { ...stateUser, nome: e } })}
          required
        />
        <FormControl.Label>
          Data nascimento <Text style={{ color: 'red' }}>*</Text>
        </FormControl.Label>
        <Flex flexDirection="row">
          <View style={{ width: '30%', marginRight: 20 }}>
            <InputSimple
              placeholder="31"
              value={dia}
              onChangeText={(e) => setDia(e)}
              keyboardType="numeric"
              maxLength={2}
              label="Dia"
            />
          </View>
          <View style={{ width: '30%', marginRight: 20 }}>
            <InputSimple
              placeholder="12"
              value={mes}
              onChangeText={(e) => setMes(e)}
              keyboardType="numeric"
              maxLength={2}
              label="Mês"
            />
          </View>
          <View style={{ width: '30%', marginRight: 20 }}>
            <InputSimple
              placeholder="1990"
              value={ano}
              onChangeText={(e) => setAno(e)}
              keyboardType="numeric"
              maxLength={4}
              label="Ano"
            />
          </View>
        </Flex>
        <SelectSimple
          dataSource={experiencias}
          onChange={(e) => dispatch({ type: 'update', payload: { ...stateUser, experiencia: e } })}
          value={stateUser.experiencia}
          label=" Experiência de treino"
          required
        />
        <FormControl.Label mt="5">
          Genero <Text style={{ color: 'red' }}>*</Text>
        </FormControl.Label>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={genero}
          onChange={(e) => setGenero(e)}
        >
          <Flex direction="row" justifyContent="space-around" alignItems="center">
            <Radio value="M" my={1}>
              Masculino{'     '}
            </Radio>
            <Radio value="F" my={1}>
              Feminino
            </Radio>
          </Flex>
        </Radio.Group>
      </View>
      <AlertDialogError
        title="Error"
        showModal={alertShow}
        onCloseModal={() => setAlertShow(false)}
        message={message}
        colorHeader={colorError}
        time={3000}
      />
    </ModalSimple>
  );
}
