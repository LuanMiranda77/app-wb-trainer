import React from 'react';
import { Image, Text, View } from 'react-native';
import imge from '../../assets/h-1.jpg';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import { useUserContext } from '../../context/useUserContext';
import { useExercicioPage } from '../../hooks/useExercicioPage';
import useImageFind from '../../hooks/useImageFind';
import { backgroundColor, colorSubtitle, colorWhite } from '../../styles';
import { NivelUser } from '../../utils/enums';
import { ContainerImage, Subtitulo, Titulo } from './styles';

export function DetalhesExercicio({ ...props }) {
  const { params } = props.route;
  const { listaExercicio, setListaExercicio } = useExercicioPage();
  const { stateUser } = useUserContext();
  const { findImageByName } = useImageFind();
  const onPlay = () => {};

  return (
    <>
      <ContainerImage source={imge} />
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 15,
          marginTop: '10%',
        }}
      >
        <ButtonIcon icon="arrowleft" size={30} color="white" onPress={() => props.navigation.goBack()} />
        <ButtonIcon icon="edit" size={30} color="#ffb400" />
      </View>
      <View
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          marginTop: '40%',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          padding: 20,
        }}
      >
        <Text style={{ color: '#ffff', fontSize: 25, fontFamily: 'reboto' }}>
          {params?.exercicio.nome}
        </Text>
        <Subtitulo color={colorSubtitle}>{`${params?.exercicio.titulo}`}</Subtitulo>
        <Text style={{ color: '#ffff', fontSize: 20, fontFamily: 'reboto', marginTop: 10 }}>
          {`Treino ${params?.exercicio.treino}`}
        </Text>
        <Subtitulo color={colorSubtitle}>{`${params?.exercicio.info}`}</Subtitulo>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#959e9f6f',
            marginTop: 25,
            padding: 10,
          }}
        >
          <View style={{ borderRightWidth: 1, borderColor: '#959e9f6f', width: '33%' }}>
            <Subtitulo color={colorSubtitle}>Nível</Subtitulo>
            <Titulo color={colorWhite}>
              {stateUser.experiencia == NivelUser.INICIATE
                ? 'Iniciante'
                : stateUser.experiencia == NivelUser.INTERMEDIARIO
                ? 'Intermediario'
                : stateUser.experiencia == NivelUser.AVANCADO
                ? 'Avancado'
                : 'Profissional'}
            </Titulo>
          </View>
          <View
            style={{ borderRightWidth: 1, borderColor: '#959e9f6f', width: '22%', left: '40%' }}
          >
            <Subtitulo color={colorSubtitle}>Séries</Subtitulo>
            <Titulo color={colorWhite}>{params?.exercicio.series}</Titulo>
          </View>
          <View style={{ width: '33%', left: '70%' }}>
            <Subtitulo color={colorSubtitle}>Repetições</Subtitulo>
            <Titulo color={colorWhite}>{params?.exercicio.repeticoes}</Titulo>
          </View>
        </View>
        <Image
          style={{ marginTop: 10, height: '48%', borderRadius: 10, width:'100%'}}
          source={findImageByName(params.exercicio.image)}
        />
      </View>
    </>
  );
}
