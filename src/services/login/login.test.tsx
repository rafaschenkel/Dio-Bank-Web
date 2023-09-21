import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = 'rafa@teste.com';

  it('Deve exibir um alert com a mensagem: Bem Vindo!', async () => {
    await login(mockEmail, '1234');
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
  });

  it('Deve exibir um erro caso email informado seja diferente da api', async () => {
    await login('teste@teste.com', '1234');
    expect(mockAlert).toHaveBeenCalledWith('Email ou senha inválido(s)!');
  });
});
