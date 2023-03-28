import { Button, Menu, Text, useColorMode } from 'native-base';
import { useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { colorSecondary } from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

// exemple options = [{id:1, label: 'editar', onPress: function}]

export function ButtonDropdown({ icon, label, children, style }) {
  const [shouldOverlapWithTrigger] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Menu
      shouldOverlapWithTrigger={shouldOverlapWithTrigger}
      placement="bottom right"
      bg={isDarkMode ? "coolGray.800" : "warmGray.50"}
      w='180'
      trigger={(triggerProps) => {
        return (
          <Button alignSelf="center" variant="solid" {...triggerProps} style={style ? style : {}}>
            {icon ? (
              <Ionicons
                name={icon}
                size={28}
                color={colorSecondary}
                style={{ marginRight: 0, marginTop: -4 }}
                {...triggerProps}
              />
            ) : (
              <Text>{label}</Text>
            )}
          </Button>
        );
      }}
    >
      {children}
    </Menu>
  );
}
