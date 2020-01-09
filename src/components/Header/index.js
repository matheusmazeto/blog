import React from 'react';
import { Link } from 'gatsby';

import HamburguerMenu from '../HamburguerMenu';
import Navbar from '../Navbar';

import Logo from '../../images/mm-black.svg';

import * as S from './styled';

function Header({ openMenu, setOpenMenu }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={Logo} alt="Logo MM" />
      </Link>
      <HamburguerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {/* <Navbar /> */}
    </S.Container>
  );
}

export default Header;
