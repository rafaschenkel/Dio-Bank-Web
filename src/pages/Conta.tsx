import { Center } from '@chakra-ui/react';
import { CardInfo } from '../components/CardInfo/CardInfo';
import { useEffect, useState } from 'react';
import { api } from '../api';

interface IUserData {
  email: string;
  password: string;
  name: string;
  numberAccount: string;
  balance: number;
  digit: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data: IUserData | any = await api;
      setUserData(data);
    };

    getData();
  }, []);

  return (
    <Center maxW="5xl" mx="auto" gap="30px" paddingTop="40px">
      <CardInfo text="Informações de acesso" />
      <CardInfo
        text="Informações da conta"
        name={userData?.name}
        numberAccount={userData?.numberAccount}
        balance={userData?.balance}
        digit={userData?.digit}
      />
    </Center>
  );
};
