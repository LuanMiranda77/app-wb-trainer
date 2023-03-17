import styled from 'styled-components/native';

export const NavBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  margin: 10px;
  border-radius: 25px;
  padding: 10px;
`;

export const Label = styled.Text`
  display: flex;
  align-items: flex-start;
  /* text-align: left; */
`;

export const PerfilUser = styled.Image`
  max-width: 50px;
  max-height: 50px;
  border-radius: 100px;
`;

export const ContainerImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  margin-right: 10px;
`;
