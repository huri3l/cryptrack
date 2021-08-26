import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
