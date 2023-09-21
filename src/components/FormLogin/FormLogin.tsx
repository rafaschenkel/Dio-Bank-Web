import { ButtonContainer } from '../Button/Button';
import { login } from '../../services/login/login';
import { Heading, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../api';
interface IUserData {
  email: string;
  password: string;
  name: string;
}

export const FormLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState<IUserData | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data: IUserData | any = await api;
      setUserData(data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <>
      <Heading as="h2" marginBottom="20px">
        Faça o login {userData?.name}
      </Heading>
      <Input
        _focus={{ borderColor: 'blue.900' }}
        _hover={{ borderColor: 'pink.900' }}
        placeholder="Email"
        type="email"
        fontWeight="bold"
        fontStyle="italic"
        maxW="lg"
        defaultValue={email}
        onBlur={e => setEmail(e.target.value)}
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
      <ButtonContainer loading={loading} text="Entrar" onClick={() => login(email, password)} />
    </>
  );
};
