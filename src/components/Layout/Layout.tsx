import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <Box minH="100vh" bgGradient="linear(135deg,pink.900 0%, black 30%, black 70%, blue.900 100%)">
      <Header />
      {children}
    </Box>
  );
};
