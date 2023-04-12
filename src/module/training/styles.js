import styled from 'styled-components/native';
import { colorIconFooter, colorPrimary } from '../../styles';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  /* background-color: ${(props) => props.background}; */
  /* border-width: 1px; */
  /* border-color: ${(props) => props.color}; */
  /* border-radius: 50px; */
  margin: 0px;
  width: 84px;
  height: 40px;
  padding-left: 0px;
  align-items: center;
`;

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin: 20px; */
  width: 90%;
  margin-left: 20px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
`;

export const ContainerImage = styled.Image`
  max-width: 75px;
  max-height: 75px;
  border-radius: 8px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const ContainerDetalhes = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 40px;
  padding-left: 0px;
  align-items: center;
  width: 25%;
`;

export const EditeExercicio = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 40px;
  padding-left: 0px;
  align-items: center;
  width: 65%;
`;

export const ButtonPlay = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  padding: 11px;
  border-radius: 50px;
`;
export const ButtonEdit = styled.TouchableOpacity`
  position: absolute;
  left: 88%;
  height: 50px;
  width: 50px;
  padding: 11px;
  border-radius: 50px;
`;
export const ButtonTreino = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  margin-top:12px;
  align-items: center;
  justify-content:center;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;

export const ButtonDetalhes = styled.View`
  position: absolute;
  left: 89%;
  top: -85%;
`;

export const DiaSemana = styled.View`
  background-color: ${(props) => props.color ? props.color:colorIconFooter};  
  width: 60px;
  height: 60px;
  align-items:center;
  justify-content:center;
  border-radius: 50px;
  margin-right: 10px;
`;

export const CardSeries = styled.View`
  background-color: ${(props) => props.color ? props.color:colorIconFooter};  
  width: 50px;
  height: 50px;
  align-items:center;
  justify-content:center;
  border-radius: 8px;
  margin-right: 10px;
`;

export const ObsExercicioTreino = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.background};
  border-width: 1px;
  border-color: ${(props) => props.color};
  border-radius: 50px;
  width: 75%;
  padding-left: 5%;
  padding-top: -20px;
  height: 14px;
  align-items: center;
`;

export const ButtonDetalhesExercicio = styled.View`
  /* position: absolute;
  left: 100%;
  top: -85%; */
`;

