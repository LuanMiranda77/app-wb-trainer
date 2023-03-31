import styled from 'styled-components/native';

export const ButtonSex = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 20px; */
  border: 1px solid ${(props) => props.color};
  width: 45%;
  height: 60%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 30px;
  margin-right: 30px;
`;
