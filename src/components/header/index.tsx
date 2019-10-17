import React from 'react';

import { HeaderContainer } from './style';
import Hamburguer from '../hamburguer';
import Menu from '../menu';

function Header({ open, setOpen }) {
  return (
    <HeaderContainer>
      <Hamburguer open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
}

export default Header;
