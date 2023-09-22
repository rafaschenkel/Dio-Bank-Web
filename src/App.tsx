import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <RoutesApp />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
};
