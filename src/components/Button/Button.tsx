import { Button } from '@chakra-ui/react';

interface IButton {
  handleLogin: () => void;
  text: string;
}

export const ButtonContainer = ({ handleLogin, text }: IButton) => {
  return (
    <Button
      onClick={handleLogin}
      my="20px"
      width="full"
      bgColor="pink.700"
      textColor="whiteAlpha.900"
      _hover={{ bgColor: 'blue.900' }}
      fontSize="18px"
    >
      {text}
    </Button>
  );
};
