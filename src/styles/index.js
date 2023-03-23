import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const colorPrimary = '#198FB4';
export const colorSecondary = '#F8753D';
export const colorTertiary = '#959E9F';
export const colorFooter = '#191e24';
export const colorIconFooter = '#959d9f';
export const colorBase = '#E1E1E1';
export const colorWhite = '#FFFF';
export const backgroundColor = '#0e0f13';
export const fontePadrao = 'Poppins';
export const colorSubtitle = '#747c7e';
export const colorWarning = '#ffb400';
export const colorError = '#B10000';
export const colorSuccess = '#32ad0c';
export const colorInfo = '#246afd';

export const stylesGlobal = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    color: colorWhite,
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

// export const GlobalStyle = createGlobalStyle`
// :root{
//   //variaveis do tema de cores
//   --colorPrimary : '#198FB4';
//   --colorSecondary : '#F8753D';
//   --colorTertiary : '#959E9F';
//   --colorFooter : '#191e24';
//   --colorIconFooter : '#959d9f';
//   --colorBase:'#E1E1E1';
//   --colorWhite:'#FFFF';
//   --backgroundColor : '#0D0F13';
//   --fontePadrao:'Poppins';
//   --white: #FFF;
//   --text-label: #fff;

//   //variaveis de tamanho
//   --max-height-button:32px;
// }
// `;

export const TituloScreen = styled.Text`
  font-size: 25px;
  color: #fff;
`;
