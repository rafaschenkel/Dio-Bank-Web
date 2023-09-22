const data = {
  email: 'rafa@teste.com',
  password: '1234',
  name: 'Rafael Schenkel de Souza',
  numberAccount: '244880',
  digit: 2,
  balance: 2358.53
};

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
