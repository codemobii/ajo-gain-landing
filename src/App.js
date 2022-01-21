import React from 'react';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import LandingPage from './LandingPage';

function App() {
  const Theme = extendTheme({
    fonts: {
      heading: "'Dongle', sans-serif",
      body: "'Dongle', sans-serif",
    },
    initialColorMode: 'light',
    useSystemColorMode: false,
  });

  return (
    <ChakraProvider theme={Theme}>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
