import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bgColor="blackAlpha.900" py="5px" textColor="white">
      <Box maxW="5xl" mx="auto" px="10px">
        <Heading as="h1">Dio Bank</Heading>
      </Box>
    </Box>
  );
};
