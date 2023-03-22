import { Box, Text, useToast } from 'native-base';
import React from 'react';

export default function Toast() {
  const toast = useToast();
  const toastSucess = (message) => {
     toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{message}</Text> 
              </Box>
            );
          },
          placement: "top-right"
        })
  };
  const toastError = (message) => {
     toast.show({
          render: () => {
            return (
              <Box bg="red.700" px="2" py="1" rounded="sm" mb={5}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{message}</Text> 
              </Box>
            );
          },
          placement: "top-right"
        })
  };
  const toastInfo = (message) => {
     toast.show({
          render: () => {
            return (
              <Box bg="blue.500" px="2" py="1" rounded="sm" mb={5}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{message}</Text> 
              </Box>
            );
          },
          placement: "top-right"
        })
  };
  return { toastSucess, toastInfo, toastError };
}
