import { Box, Heading } from '@chakra-ui/react';

interface ICardInfo {
  text: string;
  name?: string;
  numberAccount?: string;
  balance?: number;
  digit?: number;
}

export const CardInfo = ({ text, name, numberAccount, balance, digit }: ICardInfo) => {
  return (
    <Box
      borderRadius="20px"
      minW="300px"
      p="20px"
      minH="220px"
      display="flex"
      border="2px"
      textColor="whiteAlpha.900"
      flexDirection="column"
      bgColor="whiteAlpha.100"
      borderColor="pink.900"
      gap="12px"
    >
      <Heading as="h2" size="md" fontSize="26px">
        {text}
      </Heading>
      <hr />
      {name && (
        <>
          <Heading as="h3" size="md">
            Nome: {name}
          </Heading>
          <Heading as="h3" size="md">
            N° da Conta: {`${numberAccount}-${digit}`}
          </Heading>
          <Heading as="h3" size="md">
            Saldo: R$ {balance?.toFixed(2)}
          </Heading>
        </>
      )}
    </Box>
  );
};
