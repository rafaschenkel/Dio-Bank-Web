import { ReactNode } from 'react';
import { Header } from '../Header/Header';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
