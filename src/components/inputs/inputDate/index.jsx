import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Flex, Input, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet  } from 'react-native';

export const InputDate = (value, onDateChange, placeholder) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {/* <Text style={styles.text}>Birth Date :</Text> */}
      <Flex flexDirection={'row'}>
        <View w='300'>
          <Input value={date} onChange={() => showDatepicker} />
        </View>
        <Button onPress={showDatepicker} title="Select date" />
      </Flex>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    // {/* </SafeAreaView> */}
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8E9CA',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color: '#000',
  },
});
