import React from 'react';

import { Container } from './styled';

import DarkModeToogle from '../dark-mode-toggle/index';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <Container>
      <header>
        <h1>Mazeto's bomb site</h1>
        <DarkModeToogle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
    </Container>
  );
}
