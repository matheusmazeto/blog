import React from 'react';

import { HeaderContainer } from './style';
import Hamburguer from '../hamburguer';

function Header({ open, setOpen }) {
  return (
    <HeaderContainer>
      <Hamburguer open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
}

export default Header;
