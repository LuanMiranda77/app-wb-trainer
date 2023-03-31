import { Flex, FormControl, Text, View } from 'native-base';
import React from 'react';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import InputSimple from '../../components/inputs/inputSimple';
import SelectSimple from '../../components/select';
import { useUserContext } from '../../context/useUserContext';
import { useUserAplication } from '../../hooks/useUserAplication';
import { backgroundColor, colorPrimary } from '../../styles';
import experiencias from '../../__mooks/experiencia.json';

// import { Container } from './styles';

export function InitialAPP({ ...props }) {
  const { dispatch } = useUserContext();
  const { user, setUser, dia, setDia, mes, setMes, ano, setAno } = useUserAplication();

  return (
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
            Experiência <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <SelectSimple
            dataSource={experiencias}
            onChange={(e) => setUser({ ...user, experiencia: e })}
            value={user.experiencia}
          />
          <Flex flexDirection="row" mt="30">
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Altura <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço esquerdo"
                value={user.altura}
                onChangeText={(e) => setUser({ ...user, altura: parseFloat(e) })}
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: '50%', marginRight: 20 }}>
              <FormControl.Label>
                Peso <Text style={{ color: 'red' }}>*</Text>
              </FormControl.Label>
              <InputSimple
                placeholder="Medida do antebraço direito"
                value={user.peso}
                onChangeText={(e) => setUser({ ...user, peso: parseFloat(e) })}
                keyboardType="numeric"
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
          onPress={() => {
            props.navigation.navigate('Genero', { params: { user: user, setUser: setUser } });
            setUser({...user, dataNascimento: new Date(`${ano}-${mes}-${dia}`)});
            dispatch({ type: 'new', payload: user });
          }}
        />
      </View>
    </View>
  );
}
