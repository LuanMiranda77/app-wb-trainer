import { Button, Divider, Fab, Flex, Menu, ScrollView, Text, View } from 'native-base';
import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFire from 'react-native-vector-icons/MaterialIcons';
import { AlertDialogConfirme } from '../../components/alertDialog/AlertDialogConfirme';
import { ButtonDropdown } from '../../components/Buttons/ButtonDropdown';
import Loanding from '../../components/modal/loanding';
import ModalSimple from '../../components/modal/modalSimple';
import { useUserContext } from '../../context/useUserContext';
import { useTreinoPage } from '../../hooks/useTreinoPage';
import { HeaderNavBar } from '../../layout/headerNavBar';
import {
  backgroundColor,
  colorError,
  colorFooter,
  colorPrimary,
  colorSecondary,
  colorSubtitle,
  colorSuccess,
  colorWarning,
  stylesGlobal,
} from '../../styles';
import { emunImage } from '../../utils/enums';
import { Exercise } from '../exercise';
import { ListaGrupoMuscular } from '../exercise/listaGrupoMuscular';
import ModalExercicio from './modalExercicio';
import {
  ButtonDetalhesExercicio,
  ContainerDetalhes,
  ContainerImage,
  ObsExercicioTreino,
} from './styles';

export function TrainerDetalhes({ ...props }) {
  let obj = props.route?.params?.obj;
  const {
    loading,
    setLoading,
    listaTreinoExercicio,
    showModalAdd,
    setShowModalAdd,
    totlTime,
    totalCal,
    showModalExcluir,
    setShowModaExcluir,
    treinoExercicio,
    setTreinoExercicio,
    modalExercicio, 
    setModalExercicio,
    handleDeletExercicio,
    handleListExercicioByTrainer,
  } = useTreinoPage();

  const { stateUser } = useUserContext();
  useMemo(() => {
    handleListExercicioByTrainer(obj.treino);
  }, [stateUser.exercicio]);

  const [propsPass, setPropsPass] = useState({ ...props });
  const img = '../../assets/h-1.jpg';
  // let route = props.route;
  // route.name = 'Exercicios';
  return (
    <>
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        <HeaderNavBar route={props.route} navigation={props.navigation} />
        <View style={{ padding: 12, marginTop: -20 }}>
          <Text style={stylesGlobal.textTitle}>Treino - {obj.treino}</Text>
          <Flex direction="row" mb="2.5" mt="8">
            <Flex direction="row" alignItems="center" mr="5" ml="5">
              <Icon
                name="clockcircleo"
                size={20}
                color={colorSuccess}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text style={stylesGlobal.textSubTitle}>Duração</Text>
                <Text style={{ color: colorSuccess, fontWeight: 'bold' }}>{totlTime} mim</Text>
              </View>
            </Flex>
            <Flex direction="row" alignItems="center" mr="6">
              <IconFire
                name="local-fire-department"
                size={25}
                color={colorWarning}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text style={stylesGlobal.textSubTitle}>Calorias</Text>
                <Text style={{ color: colorWarning, fontWeight: 'bold' }}>
                  {totalCal.toFixed(3)} kcal
                </Text>
              </View>
            </Flex>
            <ContainerDetalhes>
              <Ionicons
                name="barbell-outline"
                size={25}
                color={(color = colorPrimary)}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text style={stylesGlobal.textSubTitle}>Exercícios</Text>
                <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>
                  {listaTreinoExercicio.length} quant
                </Text>
              </View>
            </ContainerDetalhes>
          </Flex>
        </View>
        <View
          style={{
            backgroundColor: colorFooter,
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            padding: 15,
          }}
        >
          <Text style={stylesGlobal.textTitle}>Lista de exercícios</Text>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: 50 }}>
            {listaTreinoExercicio.map((item) => {
              return (
                <View key={item._id}>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    onPress={() => {}}
                  >
                    <Flex flexDirection="row" alignItems="center">
                      <ContainerImage
                        source={
                          item.obj && item.obj?.image == ''
                            ? require(img)
                            : emunImage[item.obj?.image]
                        }
                      />
                      <View style={{ marginTop: 10 }}>
                        <Text mb="1" style={stylesGlobal.textSubTitle}>
                          {item.exercicio}
                        </Text>
                        {item.obs != '' && (
                          <ObsExercicioTreino color={colorSubtitle} background="transparent">
                            <Text
                              style={{
                                color: colorSubtitle,
                                fontSize: 11,
                                marginTop: -5,
                              }}
                            >
                              {item.obs}
                            </Text>
                          </ObsExercicioTreino>
                        )}
                        <View w="100%" mr="2" mt="1">
                          <Text>
                            <Text style={{ color: colorSuccess }}>
                              <Icon name="arrowsalt" size={15} /> Séries: {item.series}{' '}
                            </Text>{' '}
                            <Icon name="close" />{' '}
                            <Text style={{ color: colorSecondary }}> {item.repeticoes}</Text>
                            {'  '}
                            <Icon name="arrowright" />
                            {'  '}
                            <Text style={{ color: colorPrimary }}>
                              <Ionicons
                                name="barbell-outline"
                                size={15}
                                // color={(color = colorPrimary)}
                                style={{ marginRight: 10 }}
                              />{' '}
                              {item.carga}kg
                            </Text>
                          </Text>
                          <Text>
                            Descanso: {item.descanso}sg
                            {'  '}
                            <Icon name="arrowright" />
                            {'  '}
                            <Text style={{ color: colorWarning, fontWeight: 'bold' }}>
                              <IconFire
                                name="local-fire-department"
                                size={12}
                                color={colorWarning}
                                style={{ marginRight: 10 }}
                              />
                              {item.calorias.toFixed(3)} kcal
                            </Text>
                          </Text>
                        </View>
                      </View>
                    </Flex>

                    <ButtonDetalhesExercicio color={'#959e9f6f'}>
                      <ButtonDropdown
                        icon="ellipsis-vertical-sharp"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        {/* <Menu.Item
                          mb="3"
                          onPress={() =>
                            props.navigation.navigate('Detalhes do treino', { obj: item })
                          }
                        >
                          <Text style={stylesGlobal.textTitle}>Abrir</Text>
                        </Menu.Item> */}
                        <Menu.Item
                          mb="3"
                          onPress={() => {
                            setModalExercicio(true);
                            setTreinoExercicio({ ...item });
                          }}
                        >
                          <Text style={stylesGlobal.textTitle}>Editar</Text>
                        </Menu.Item>
                        <Menu.Item
                          onPress={() => {
                            setShowModaExcluir(true);
                            setTreinoExercicio({ ...item });
                          }}
                        >
                          <Text style={stylesGlobal.textTitle}>Excluir</Text>
                        </Menu.Item>
                      </ButtonDropdown>
                    </ButtonDetalhesExercicio>
                  </Flex>
                  <Divider mt="3" />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Fab
          style={{ color: colorWarning, fontWeight: 'bold', marginBottom: 50 }}
          renderInPortal={false}
          shadow={3}
          size="sm"
          onPress={() => setShowModalAdd(true)}
          icon={<Icon name="plus" size={20} color="white" />}
        />
        <View style={{ padding: 20, position: 'absolute', top: '90%', width: '100%' }}>
          <Button style={{ borderRadius: 50 }} onPress={() => {}}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              <Icon name="play" size={15} /> Iniciar treino
            </Text>
          </Button>
        </View>
      </View>

      <ModalSimple
        showModal={showModalAdd}
        onCloseModal={() => setShowModalAdd(false)}
        title={'Escolha um exercício'}
        mt='5%'
      >
        <Exercise />
      </ModalSimple>

      <AlertDialogConfirme
        title={'Excluir'}
        colorHeader={colorError}
        showModal={showModalExcluir}
        onCloseModal={() => setShowModaExcluir(false)}
        actionButton={() => {
          setLoading(true);
          handleDeletExercicio();
        }}
      >
        <Text fontSize="lg">Você tem certeza que deseja excluir este item?</Text>
      </AlertDialogConfirme>

      <Loanding
        showLoading={loading}
        closeLoading={() => setLoading(false)}
        text="Executando aguarde..."
      />

      <ModalExercicio 
        showModal={modalExercicio}
        onCloseModal={() => setModalExercicio(false)}
        exercicio={treinoExercicio.obj}
        treinoExercicio={treinoExercicio}
      />
    </>
  );
}
