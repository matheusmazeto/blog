import React from 'react';

import { Container } from './styled';

import HamburguerMenu from '../hamburguer-menu';
import DarkModeToogle from '../dark-mode-toggle';

export default function Header({
  darkMode,
  setDarkMode,
  openMenu,
  setOpenMenu,
}) {
  return (
    <Container>
      <header>
        <HamburguerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

        <DarkModeToogle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
    </Container>
  );
}
