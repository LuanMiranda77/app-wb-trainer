import { Divider, FormControl, Menu, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { AlertDialogConfirme } from '../../components/alertDialog/AlertDialogConfirme';
import { ButtonDropdown } from '../../components/Buttons/ButtonDropdown';
import InputSimple from '../../components/inputs/inputSimple';
import ModalSimple from '../../components/modal/modalSimple';
import SelectSimple from '../../components/select';
import { useUserContext } from '../../context/useUserContext';
import useImageFind from '../../hooks/useImageFind';
import { useTreinoPage } from '../../hooks/useTreinoPage';
import { HeaderNavBar } from '../../layout/headerNavBar';
import {
  backgroundColor,
  colorError,
  colorFooter,
  colorPrimary,
  colorSecondary,
  stylesGlobal,
} from '../../styles';
import grupoMuscular from '../../__mooks/grupoMuscular.json';
import { ButtonDetalhes, Container, ContainerDetalhes, DiaSemana } from './styles.js';

export function Training({ ...props }) {
  const { stateUser, dispatch } = useUserContext();
  const {
    showModal,
    setShowModal,
    typeModal,
    setTypeModal,
    treino,
    setTreino,
    listaTreino,
    handleNew,
    handleSave,
    handleDelete,
    showModalExcluir,
    setShowModaExcluir,
  } = useTreinoPage();

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <HeaderNavBar route={props.route} navigation={props.navigation} buttonRigth={handleNew} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 0 }}>
          {listaTreino.map((item) => {
            return (
              <Container
                key={item._id}
                color={colorFooter}
                onPress={() => props.navigation.navigate('Detalhes do treino', { obj: item })}
              >
                <DiaSemana color={stateUser.treinoAtual != item.treino ? colorSecondary : ''}>
                  <Text style={stylesGlobal.textTitle}>
                    {item.treino == 'A'
                      ? 'Seg'
                      : item.treino == 'B'
                      ? 'Ter'
                      : item.treino == 'C'
                      ? 'Qua'
                      : item.treino == 'D'
                      ? 'Qui'
                      : item.treino == 'E'
                      ? 'Sexta'
                      : 'Sab'}
                  </Text>
                </DiaSemana>
                <View style={{ marginTop: 10 }}>
                  <Text style={stylesGlobal.textTitle}>Treino - {item.treino}</Text>
                  <Text style={{ marginTop: 5 }}>{item.titulo}</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <ContainerDetalhes>
                      <Icon
                        name="clockcircleo"
                        size={15}
                        color="#32ad0c"
                        style={{ marginRight: 5 }}
                      />
                      <Text style={{ color: '#32ad0c', fontWeight: 'bold' }}>{item.tempo} tem</Text>
                    </ContainerDetalhes>
                    <ContainerDetalhes>
                      <IconFire
                        name="local-fire-department"
                        size={15}
                        color="#ffb400"
                        style={{ marginRight: 5 }}
                      />
                      <Text style={{ color: '#ffb400', fontWeight: 'bold' }}>
                        {item.calorias} cal
                      </Text>
                    </ContainerDetalhes>
                    <ContainerDetalhes>
                      <Ionicons
                        name="barbell-outline"
                        size={15}
                        color={(color = colorPrimary)}
                        style={{ marginRight: 5 }}
                      />
                      <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>
                        {item.quant} exe.
                      </Text>
                    </ContainerDetalhes>
                    <ButtonDetalhes>
                      <ButtonDropdown
                        icon="ellipsis-vertical-sharp"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <Menu.Item
                          mb="3"
                          onPress={() =>
                            props.navigation.navigate('Detalhes do treino', { obj: item })
                          }
                        >
                          <Text style={stylesGlobal.textTitle}>Abrir</Text>
                        </Menu.Item>
                        <Menu.Item
                          mb="3"
                          onPress={() => {
                            setShowModal(true);
                            setTreino({ ...item });
                            setTypeModal('edit');
                          }}
                        >
                          <Text style={stylesGlobal.textTitle}>Editar</Text>
                        </Menu.Item>
                        <Menu.Item onPress={() => {
                          setShowModaExcluir(true);
                          setTreino({ ...item });
                        }}>
                          <Text style={stylesGlobal.textTitle}>Excluir</Text>
                        </Menu.Item>
                      </ButtonDropdown>
                    </ButtonDetalhes>
                  </View>
                </View>
              </Container>
            );
          })}
        </ScrollView>
        {/* <Fab
          renderInPortal={false}
          shadow={3}
          size="sm"
          onPress={()=>setShowModal(true)}
          icon={<Icon name="plus" size={25} color="white" />}
        /> */}
      </View>

      <AlertDialogConfirme
        title={'Excluir'}
        colorHeader={colorError}
        showModal={showModalExcluir}
        onCloseModal={() => setShowModaExcluir(false)}
        actionButton={() => handleDelete()}
      >
        <Text fontSize="lg">Você tem certeza que deseja excluir este item?</Text>
      </AlertDialogConfirme>

      <ModalSimple
        showModal={showModal}
        onCloseModal={() => setShowModal(false)}
        title={typeModal === 'new' ? 'Cadastro de Treino' : 'Editar Treino'}
        labelButton={'Salvar'}
        actionButton={handleSave}
      >
        <FormControl>
          <FormControl.Label>Nome:</FormControl.Label>
          <Text style={stylesGlobal.textTitle}>Treino - {treino.treino}</Text>
          <Divider my="2" />
          <FormControl.Label style={{ marginTop: 20 }}>
            Observações: <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <InputSimple
            placeholder="Digite o nome exercicio"
            value={treino.titulo}
            onChangeText={(e) => setTreino({ ...treino, titulo: e })}
          />

          <FormControl.Label>
            Músculo alvo principal <Text style={{ color: 'red' }}>*</Text>
          </FormControl.Label>
          <SelectSimple
            dataSource={grupoMuscular}
            onChange={(e) => setTreino({ ...treino, grupo: e })}
            value={treino.grupo}
          />
        </FormControl>
      </ModalSimple>
    </>
  );
}
