import { api } from '../../api';

export const login = async (numberAccount: string, password: string): Promise<void> => {
  const data: any = await api;

  if (numberAccount !== data.numberAccount || password !== data.password)
    return alert('Conta ou senha inválido(s)!');
  alert(`Bem vindo ${data.name}!`);
};
