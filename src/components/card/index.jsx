import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { colorPrimary, colorSecondary, colorWhite } from '../../styles';
import { Div } from './styles';

export function Card({ ...props }) {

  const array = {
    data: [0, props.exercicio > 0 ?((props.feito / props.exercicio) * 100) / 100 : 0],
  };
  const chartConfig = {
    backgroundGradientFrom: '#03185e',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.0,
    color: (opacity = 1) => `rgba(14, 82, 103, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    useShadowColorFromDataset: false, // optional
    barPercentage: 0.2,
  };
  // const screenWidth = Dimensions.get("window").width;
  return (
    <Div color={colorPrimary}>
      <View>
        <Text style={style.text1}>{props.text1}</Text>
        <Text style={style.text2}>{props.text2}</Text>
        <Text style={style.small}>{`${props.feito}/${props.exercicio} completar`}</Text>
      </View>
      <ProgressChart data={array} width={120} height={120} strokeWidth={16} radius={32} chartConfig={chartConfig} hideLegend={true} />
      <Text
        style={{
          position: 'absolute',
          color: colorWhite,
          left: array.data[1] < 0.1 ? '85%' : '83%',
          top: '52%',
          fontWeight: 'bold',
          fontSize: 22,
        }}
      >
        {array.data[1] * 100}%
      </Text>
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
    fontSize: 17,
    color: colorSecondary,
    fontWeight: 'bold',
  },
  small: {
    marginTop: 30,
    fontSize: 15,
    color: colorWhite,

  },
});
