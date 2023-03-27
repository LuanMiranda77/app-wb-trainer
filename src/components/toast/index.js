import { Box, Text, useToast } from 'native-base';
import React from 'react';
import { colorError, colorInfo, colorSuccess, colorWarning } from '../../styles';

export default function Toast() {
  const toast = useToast();
  const toastSucess = (message) => {
    toast.show({
      render: () => {
        return (
          <Box px="4" py="4" rounded="sm" mb={5} style={{ backgroundColor: colorSuccess }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}> 😉 {message}</Text>
          </Box>
        );
      },
      placement: 'top-right',
    });
  };
  const toastError = (message) => {
    toast.show({
      render: () => {
        return (
          <Box px="4" py="4" rounded="sm" mb={5} style={{ backgroundColor: colorError }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}> 😔 {message}</Text>
          </Box>
        );
      },
      placement: 'top-right',
    });
  };
  const toastInfo = (message) => {
    toast.show({
      render: () => {
        return (
          <Box px="4" py="4" rounded="sm" mb={5} style={{ backgroundColor: colorInfo }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}> 🧐 {message}</Text>
          </Box>
        );
      },
      placement: 'top-right',
    });
  };
  const toastWarning = (message) => {
    toast.show({
      render: () => {
        return (
          <Box px="4" py="4" rounded="sm" mb={5} style={{ backgroundColor: colorWarning }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}> 🧐 {message}</Text>
          </Box>
        );
      },
      placement: 'top-right',
    });
  };
  return { toastSucess, toastInfo, toastError, toastWarning };
}
