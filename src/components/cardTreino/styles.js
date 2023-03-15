import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  margin: 20px;
  border-radius: 25px;
  width: 300px;
  height: 300px;
`;

export const ContainerImage = styled.Image`
  max-width: 100%;
  max-height: 60%;
  border-radius: 25px;
`;

export const ContainerDetalhes = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.background};
  border-width: 1px;
  border-color: ${(props) => props.color};
  margin: 5px;
  border-radius: 50px;
  width: 84px;
  height: 40px;
  padding-left: 4px;
  align-items: center;
`;

export const ButtonPlay = styled.TouchableOpacity`
  position: absolute;
  left: 80%;
  top: -30%;
  background-color: ${(props) => props.color};
  height: 50px;
  width: 50px;
  padding: 12px;
  border-radius: 50px;
`;
