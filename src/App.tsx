import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { FormLogin } from './components/FormLogin/FormLogin';

export function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box
        minHeight="100vh"
        p="20px"
        bgGradient="linear(135deg,pink.900 0%, black 30%, black 70%, blue.900 100%)"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Flex
          alignItems="center"
          direction="column"
          gap="5"
          maxW="lg"
          minW="lg"
          maxH="md"
          marginX="auto"
          borderRadius="xl"
          border="1px"
          px="30px"
          py="30px"
          bgColor="whiteAlpha.100"
          textColor="white"
        >
          <Heading as="h2" marginBottom="20px">
            Login
          </Heading>
          <FormLogin />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
