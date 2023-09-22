import { Box, Flex } from '@chakra-ui/react';
import { FormLogin } from '../components/FormLogin/FormLogin';

export const Home = () => {
  return (
    <Box height="500px" p="20px" justifyContent="center" display="flex" alignItems="center">
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
  );
};
