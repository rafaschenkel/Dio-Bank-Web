import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Conta } from './pages/Conta';

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </>
  );
};
