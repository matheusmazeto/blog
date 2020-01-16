import React, { useState } from 'react';
import { Link } from 'gatsby';

import HamburguerMenu from '../HamburguerMenu';
import Navbar from '../Navbar';

import Logo from '../../images/mm-black.svg';

import * as S from './styled';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  return (
    <S.Container>
      <Link to="/">
        <img src={Logo} alt="Logo MM" />
      </Link>
      <HamburguerMenu setOpenMenu={() => setOpenMenu(!openMenu)} />
      {/* <Navbar openMenu={openMenu} /> */}
    </S.Container>
  );
}

export default Header;
