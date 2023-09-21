import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IButton {
  onClick: MouseEventHandler;
  text: string;
}

export const ButtonContainer = ({ onClick, text }: IButton) => {
  return (
    <Button
      onClick={onClick}
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
