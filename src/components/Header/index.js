import React, { useState } from 'react';

import HamburguerMenu from '../HamburguerMenu';

import * as S from './styled';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  return (
    <S.Container>
      <S.Logo to="/">Room on Fire</S.Logo>
      <HamburguerMenu setOpenMenu={() => setOpenMenu(!openMenu)} />
      {/* <Navbar openMenu={openMenu} /> */}
    </S.Container>
  );
}

export default Header;
