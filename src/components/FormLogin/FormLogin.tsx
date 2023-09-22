import { ButtonContainer } from '../Button/Button';
import { login } from '../../services/login/login';
import { Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const FormLogin = () => {
  const [numberAccount, setNumberAccount] = useState<string>('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Heading as="h2" marginBottom="20px">
        Acesse sua conta
      </Heading>
      <Input
        _focus={{ borderColor: 'blue.900' }}
        _hover={{ borderColor: 'pink.900' }}
        placeholder="Número da Conta"
        type="text"
        fontWeight="bold"
        fontStyle="italic"
        maxW="lg"
        defaultValue={numberAccount}
        onBlur={e => setNumberAccount(e.target.value)}
      />
      <Input
        _focus={{ borderColor: 'blue.900' }}
        _hover={{ borderColor: 'pink.900' }}
        placeholder="Senha"
        type="password"
        fontWeight="bold"
        fontStyle="italic"
        maxW="lg"
        defaultValue={password}
        onBlur={e => setPassword(e.target.value)}
      />
      <ButtonContainer text="Entrar" onClick={() => login(numberAccount, password)} />
    </>
  );
};
