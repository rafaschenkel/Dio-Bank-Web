const data = {
  email: 'rafa@teste.com',
  password: '1234',
  name: 'Rafael'
};

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
