import React from 'react';
import { Button, Header } from './styles';
import Logo from '../../assets/logo';
import Cart from '../../assets/cart';

const HeaderComponent: React.FC = () => {
  const openCartModal = () => {
    window.dispatchEvent(new Event("openCartModal"));
  };

  return (
    <Header>
      <Logo />
      <Button onClick={openCartModal}>
        <Cart />
      </Button>
    </Header>
  );
};

export default HeaderComponent;
