import { Flex, FormControl, Text, View } from 'native-base';
import React from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputMask from '../../components/inputs/inputMask';
import InputSimple from '../../components/inputs/inputSimple';
import Loanding from '../../components/modal/loanding';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import Toast from '../../components/toast';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';
import experiencias from '../../__mooks/experiencia.json';

export function InitialAPP({ ...props }) {
  const { dispatch } = useUserContext();
  const { user, setUser, dia, setDia, mes, setMes, ano, setAno, isValidDate, } = useUserAplication();
  const { toastError } = Toast();
  const createUserState = () => {
    if (
      user.nome == '' ||
      user.dia == '' ||
      user.mes == '' ||
      user.ano == '' ||
      user.experiencia == '' ||
      user.altura == 0 ||
      user.peso == 0
    ) {
      toastError('Existe campos em branco');
      return;
    }

    if (!isValidDate(dia, mes, ano)) {
      toastError('Data de nascimento inválida');
      return;
    }

    props.navigation.navigate('Genero');
    setUser({ ...user, dataNascimento: new Date(`${ano}-${mes}-${dia}`) });
    dispatch({ type: 'new', payload: user });
  };
  return (<>
    <View p="5" style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View>
        <Text fontSize="lg">😎 Aplicativo para acompanhar seu treino.</Text>
        <Text fontSize="4xl">Cadastrando seus dados!</Text>
      </View>
      <View>
        <FormControl>
          <FormControl.Label>
            Nome <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <InputSimple
            placeholder="Digite o seu nome"
            value={user.nome}
            onChangeText={(e) => setUser({ ...user, nome: e })}
          />
          <FormControl.Label>
            Data nascimento <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <Flex flexDirection="row">
            <View style={{ width: '30%', marginRight: 20 }}>
              <FormControl.Label>Dia</FormControl.Label>
              <InputSimple
                placeholder="31"
                value={dia}
                onChangeText={(e) => setDia(e)}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
            <View style={{ width: '30%', marginRight: 20 }}>
              <FormControl.Label>Mês</FormControl.Label>
              <InputSimple
                placeholder="12"
                value={mes}
                onChangeText={(e) => setMes(e)}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
            <View style={{ width: '30%', marginRight: 20 }}>
              <FormControl.Label>Ano</FormControl.Label>
              <InputSimple
                placeholder="1990"
                value={ano}
                onChangeText={(e) => setAno(e)}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
          </Flex>
          <FormControl.Label>
            Experiência de treino <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <SelectSimple
            dataSource={experiencias}
            onChange={(e) => setUser({ ...user, experiencia: e })}
            value={user.experiencia}
          />
          <Flex flexDirection="row" mt="30">
            <View style={{ width: '50%', marginRight: 20 }}>
              <InputMask
                placeholder="Medida do antebraço esquerdo"
                value={String(user.altura)}
                onChangeText={(e) => setUser({ ...user, altura: parseFloat(e) })}
                keyboardType="numeric"
                label="Altura"
                required
                mask="altura"
              />
            </View>
            <View style={{ width: '45%' }}>
              <InputMask
                placeholder="Medida do antebraço direito"
                value={String(user.peso)}
                onChangeText={(e) => setUser({ ...user, peso: parseFloat(e) })}
                keyboardType="numeric"
                label="Peso"
                required
                mask="peso"
              />
            </View>
          </Flex>
        </FormControl>
      </View>
      <View style={{ position: 'absolute', top: 600, left: '45%' }}>
        <ButtonIcon
          icon="right"
          color="white"
          backgroundColor={colorPrimary}
          width={80}
          height={80}
          padding={20}
          borderRadius={80}
          size={40}
          onPress={() => createUserState()}
        />
      </View>
    </View>
    </>
  );
}
