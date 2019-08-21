import React, { useState } from 'react';

import { Container, Menu } from './styled';

import HamburguerMenu from '../hamburguer-menu';
import CloseMenu from '../close-menu';
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
        <HamburguerMenu openMenu={openMenu} onClick={setOpenMenu} />

        <DarkModeToogle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
    </Container>
  );
}
