import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { colorPrimary, colorSecondary, colorWhite, styleGlobal } from '../../styles';
import { Div } from './styles'

export function Card({ ...props }) {

  const data = {
    labels: ['Peito', 'Braço'], // optional
    data: [0,0.5],
  };
  const chartConfig = {
    backgroundGradientFrom: '#03185e',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.0,
    color: (opacity = 1) => `rgba(14, 82, 103, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    useShadowColorFromDataset: false, // optional
    barPercentage:0.2,
    
  };
  const screenWidth = Dimensions.get("window").width;
  return (
    <Div color={colorPrimary}>
      <View>
        <Text style={style.text1}>{props.text1}</Text>
        <Text style={style.text2}>{props.text2}</Text>
        <Text style={style.small}>{props.exercicio}</Text>
      </View>
      <ProgressChart
        data={data}
        width={120}
        height={120}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}

      />
    </Div>
  );
}

const style = StyleSheet.create({
  text1: {
    fontSize: 30,
    color: colorWhite,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 30,
    color: colorSecondary,
    fontWeight: 'bold',
  },
  small: {
    marginTop:10,
    fontSize: 15,
    color: colorWhite,
  },
});
