import styled from 'styled-components/native';

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
  max-width: 60px;
  max-height: 60px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const ContainerDetalhes = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 40px;
  padding-left: 0px;
  align-items: center;
  width: 65%;
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
