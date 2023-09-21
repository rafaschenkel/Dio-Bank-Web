import { Box, Heading } from '@chakra-ui/react';

export function Header() {
  return (
    <Box bgColor="blackAlpha.900" py="5px" textColor="white">
      <Box maxW="5xl" mx="auto">
        <Heading as="h1">Dio Bank</Heading>
      </Box>
    </Box>
  );
}
