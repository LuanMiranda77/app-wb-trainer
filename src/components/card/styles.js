import styled from 'styled-components/native';

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  margin: 20px;
  border-radius: 25px;
  padding: 20px;
`;