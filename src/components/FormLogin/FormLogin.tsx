import { ButtonContainer } from '../Button/Button';
import { login } from '../../services/login/login';
import { Input } from '@chakra-ui/react';

export const FormLogin = () => {
  return (
    <>
      <Input
        _focus={{ borderColor: 'blue.900' }}
        _hover={{ borderColor: 'pink.900' }}
        placeholder="Email"
        type="email"
        fontWeight="bold"
        fontStyle="italic"
        maxW="md"
        id="inputEmail"
      />
      <Input
        _focus={{ borderColor: 'blue.900' }}
        _hover={{ borderColor: 'pink.900' }}
        placeholder="Senha"
        type="password"
        fontWeight="bold"
        fontStyle="italic"
        maxW="md"
      />
      <ButtonContainer text="Entrar" handleLogin={login} />
    </>
  );
};
