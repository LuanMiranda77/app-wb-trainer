import { Input, View } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorFooter, colorSecondary, colorWhite } from '../../../styles';

export default function InputSearch(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: colorFooter,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginRight:20,
        marginLeft:20,
      }}
    >
      <Icon name="search1" size={30} color={colorSecondary} style={{ marginTop: 7 }} />
      <Input
        variant="unstyled"
        size="lg"
        color="#fff"
        cursorColor={colorWhite}
        focusOutlineColor={colorSecondary}
        w={{ base: '90%', md: '50%' }}
        placeholder="Pesquisar"
        {...props}
      />
    </View>
  );
}
