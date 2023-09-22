import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockName = 'Rafael Schenkel de Souza';
  const mockNumberAccount = '244880';

  it('Deve exibir um alert com a mensagem: Bem Vindo!', async () => {
    await login(mockNumberAccount, '1234');
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockName}!`);
  });

  it('Deve exibir um erro caso email informado seja diferente da api', async () => {
    await login('442132', '1234');
    expect(mockAlert).toHaveBeenCalledWith('Conta ou senha inválido(s)!');
  });
});
