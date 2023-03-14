import React from 'react';
import { Text, View } from 'react-native';
import { backgroundColor } from '../../styles';

export function Training({ navigation, route }) {
//   const { treino } = route?.params;
  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <Text>{route?.params?.treino}</Text>
    </View>
  );
}
