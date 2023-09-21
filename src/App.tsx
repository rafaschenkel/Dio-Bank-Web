import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { FormLogin } from './components/FormLogin/FormLogin';
import { Layout } from './components/Layout/Layout';

export function App() {
  return (
    <ChakraProvider>
      <Layout>
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
            minW="sm"
            marginX="auto"
            borderRadius="xl"
            border="1px"
            p="30px"
            bgColor="whiteAlpha.100"
            textColor="white"
          >
            <FormLogin />
          </Flex>
        </Box>
      </Layout>
    </ChakraProvider>
  );
}
